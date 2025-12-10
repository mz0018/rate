class SuperAdminController {

    constructor() {}

    async registerSuperAdmin(req, res) {
        try {
            const data = req.body;

            console.log("Receive data", data);
        } catch (err) {
            console.error("Error saving");
            res.status(500).json({
                success: false,
                message: "Server error",
                error: err.message
            })
        }
    }
}

module.exports = new SuperAdminController;