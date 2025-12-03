class ClientController {

    constructor() {}

    //check the functions on routes
    async saveFeedback(req, res) {
        try {
            const feedbackData = req.body;
            
            console.log("Selected Office:",feedbackData.selectedOffice);
            const servicesInfo = feedbackData.services?.selected?.map(s => `[ID: ${s.id}] ${s.name}`).join(", ") || "None";
            console.log("Selected Services:", servicesInfo);
            console.log("Other Service Text:", feedbackData.services?.otherText || "N/A");
            console.log("Demographics:", feedbackData.demographics?.affiliations);
            console.log("Gender:", feedbackData.demographics?.genders);
            console.log("Age Groups:", feedbackData.demographics?.ageGroups);
            console.log("Employment Status:", feedbackData.demographics?.employmentStatus);
            console.log("Address Details:", feedbackData.demographics?.addresses?.details);
            console.log("Date Submitted", feedbackData.submittedAt);
            
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
}

module.exports = new ClientController();