const express = require('express');
const ClientController = require('../controllers/ClientController');
const protect = require('../middleware/authMiddleware');


const router = express.Router();

//check this route on app.js
router.post('/submit', (req, res) => ClientController.saveFeedback(req, res));
router.post('/signin', (req, res) => ClientController.verifyClientAdmin(req, res));
router.get('/me', protect, (req, res) => ClientController.getCurrentUser(req, res));
router.post('/logout', (req, res) => ClientController.logout(req, res));

module.exports = router;