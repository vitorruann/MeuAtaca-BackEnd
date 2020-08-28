const express = require('express');

const router = express.Router();

const TesteController = require('./app/controllers/TesteController');

router.get('/', TesteController.store);

module.exports = router;
