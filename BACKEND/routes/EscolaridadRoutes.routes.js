const router = require('express').Router()
const {EscolaridadController} = require('../controllers')
//const { AuthMiddleware } = require('../middlewares')

router.get("/obtenerTodosEscolaridad", EscolaridadController.obtenerTodosEscolaridad)

module.exports = router