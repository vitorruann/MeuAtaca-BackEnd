const express = require('express');

const router = express.Router();

const TesteController = require('./controllers/TesteController');

router.get('/', TesteController.store);

module.exports = router;
