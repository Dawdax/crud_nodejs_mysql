const express = require('express')
const controller = require('../controllers/customerController')

const router = express.Router();
router.get('/', controller.listar)

module.exports = router;