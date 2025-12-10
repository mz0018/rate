const express = require("express");
const cors = require("cors");

const clientRoutes = require("./routes/clientRoutes");
const superAdminRoutes = require("./routes/SuperAdminRoutes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

app.get("/", (req, res) => {
    res.send("Backend 201");
});

app.use("/client", clientRoutes);

app.use("/it", superAdminRoutes);

module.exports = app;
