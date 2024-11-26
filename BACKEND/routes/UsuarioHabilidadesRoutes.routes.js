const router = require('express').Router()
const {UsuarioHabilidadesController} = require('../controllers')
//const { AuthMiddleware } = require('../middlewares')

router.get("/obtenerUsuarioHabilidades/:id", UsuarioHabilidadesController.obtenerUsuarioHabilidades)
router.post("/agregarUsuarioHabilidades", UsuarioHabilidadesController.agregarUsuarioHabilidades)
router.delete("/eliminarUsuarioHabilidades", UsuarioHabilidadesController.eliminarUsuarioHabilidades)

module.exports = router