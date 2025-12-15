const express = require('express');
const ClientController = require('../controllers/ClientController');

const router = express.Router();

//check this route on app.js
router.post('/submit', (req, res) => ClientController.saveFeedback(req, res));
router.post('/signin', (req, res) => ClientController.verifyClientAdmin(req, res));

module.exports = router;