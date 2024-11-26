const router = require('express').Router()
const {HabilidadesController} = require('../controllers')
//const { AuthMiddleware } = require('../middlewares')

router.get("/obtenerTodosHabilidades", HabilidadesController.obtenerTodosHabilidades)

module.exports = router