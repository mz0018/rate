const express = require('express');
const ClientController = require('../controllers/ClientController');

const router = express.Router();

//check this route on app.js
router.post('/submit', (req, res) => ClientController.saveFeedback(req, res));

module.exports = router;