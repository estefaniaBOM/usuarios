const router = require('express').Router()
const {UsuariosController} = require('../controllers')
const upload = require('../middleware/multerConfig');
//const { AuthMiddleware } = require('../middlewares')

router.get("/obtenerTodosUsuarios", UsuariosController.obtenerTodosUsuarios)
router.get("/obtenerUsuario/:id", UsuariosController.obtenerUsuario)
router.post("/agregarUsuario", UsuariosController.agregarUsuario)
router.put("/actualizarUsuario", UsuariosController.actualizarUsuario)

router.post('/upload', upload.single('image'), UsuariosController.uploadImage);

/*router.get("/obtenerRecepcion/:id", [AuthMiddleware], RecepcionController.obtenerRecepcion)
router.post("/agregarRecepcion", [AuthMiddleware], RecepcionController.agregarRecepcion)
router.put("/actualizarRecepcion", [AuthMiddleware], RecepcionController.actualizarRecepcion)
router.delete("/eliminarRecepcion/:id", [AuthMiddleware], RecepcionController.eliminarRecepcion)*/

module.exports = router