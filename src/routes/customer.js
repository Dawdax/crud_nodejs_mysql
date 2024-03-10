const express = require('express')
const router = express.Router();

const controller = require('../controllers/customerController')

 
router.get('/', controller.listar)
router.post('/add', controller.guardar)
 
module.exports = router;