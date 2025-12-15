const OfficeAdmin = require("../models/officeAdmins/OfficeAdminModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
class ClientController {

    constructor() {}

    async saveFeedback(req, res) {
        try {
            const feedbackData = req.body;

            console.log("Respondent Name:", feedbackData.respondent?.clientName || "N/A");
            console.log("Respondent Phone:", feedbackData.respondent?.clientPhone || "N/A");            
            console.log("Selected Office:", feedbackData.selectedOffice);

            const servicesInfo = feedbackData.services?.selected?.map(s => `[ID: ${s.id}] ${s.name}`).join(", ") || "None";
            console.log("Selected Services:", servicesInfo);

            console.log("Other Service Text:", feedbackData.services?.otherText || "N/A");
            console.log("Demographics:", feedbackData.demographics?.affiliations);
            console.log("Gender:", feedbackData.demographics?.genders);
            console.log("Age Groups:", feedbackData.demographics?.ageGroups);
            console.log("Employment Status:", feedbackData.demographics?.employmentStatus);
            console.log("Address Details:", feedbackData.demographics?.addresses?.details);
            console.log("Date Submitted:", feedbackData.submittedAt);

            console.log("Service Ratings:");
            if (Array.isArray(feedbackData.ratings)) {
                feedbackData.ratings.forEach(rating => {
                    console.log(`  ${rating.name}: ${rating.value}`);
                });
            } else if (typeof feedbackData.ratings === 'object') {
                Object.entries(feedbackData.ratings).forEach(([key, value]) => {
                    console.log(`  ${key}: ${value}`);
                });
            } else {
                console.log("No ratings found or invalid format");
            }

            console.log("Other Suggestions:", feedbackData.otherSuggestions || "No suggestions provided.");

            res.status(200).json({ 
                success: true, 
                message: "Feedback received successfully",
                data: feedbackData 
            });
        } catch (error) {
            console.error("Error saving feedback:", error);
            res.status(500).json({ 
                success: false,
                message: "Server error", 
                error: error.message 
            });
        }
    }

    async verifyClientAdmin(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({
                    success: false,
                    message: "Username and password are required."
                });
            }

            const officeAdmin = await OfficeAdmin
                .findOne({ username: username.toLowerCase() })
                .select("+password");

            if (!officeAdmin) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid username or password."
                });
            }

            const validPassword = await argon2.verify(officeAdmin.password, password);

            if (!validPassword) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid username or password."
                });
            }

            const token = jwt.sign(
                {
                    id: officeAdmin._id,
                    username: officeAdmin.username,
                    role: officeAdmin.role
                },
                process.env.JWT_SECRET || "supersecretkey",
                { expiresIn: "1h" }
            );

            res.status(200).json({
                success: true,
                message: "Login successful",
                token,
                data: {
                    _id: officeAdmin._id,
                    username: officeAdmin.username,
                    firstname: officeAdmin.firstName,
                    lastname: officeAdmin.lastName,
                    middlename: officeAdmin.middleName,
                    role: officeAdmin.role
                }
            });

        } catch (error) {
            console.error("Backend Error:", error);
            res.status(500).json({
                success: false,
                message: "Server error",
                error: error.message
            });
        }
    }
}

module.exports = new ClientController();
