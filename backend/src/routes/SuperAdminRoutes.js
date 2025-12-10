const express = require('express');
const SuperAdminController = require('../controllers/SuperAdminController');

const router = express.Router();

router.post('/signup', (req, res) => SuperAdminController.registerSuperAdmin(req, res));

module.exports = router;