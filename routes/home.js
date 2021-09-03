const express = require('express');

const controller = require('../controllers/home.js');

const router = express.Router();

router.get('/', controller.getHome)

router.post('/send', controller.sendMail)

router.get('/thankyou', controller.getThankYou)

module.exports = router;