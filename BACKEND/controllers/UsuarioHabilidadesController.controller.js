const { UsuarioHabilidadesService } = require('../services')
//const { enviarError } = require('../utileria')
//const jwt = require('jsonwebtoken');
const { secret } = require("../config");
let _UsuarioHabilidadesService = null

class UsuarioHabilidadesController {
    constructor() {  
        _UsuarioHabilidadesService = new UsuarioHabilidadesService()
    }

    async obtenerUsuarioHabilidades(req, res) {
        try {
            const usuarioHabilidades = await _UsuarioHabilidadesService.obtenerUsuarioHabilidades(req.params.id)
            return res.send({ data: usuarioHabilidades })
        } catch (error) {
            console.log(error);
            enviarError(res, error)
        }
    }

    async agregarUsuarioHabilidades(req, res) {
        try {
            const dataAgregar = await _UsuarioHabilidadesService.agregarUsuarioHabilidades(req.body)
            return res.send({ data: dataAgregar })
        } catch (err) {
            console.log(err)
            enviarError(res, err)
        }
    }

    async eliminarUsuarioHabilidades(req, res) {
        try {
            const dataEliminar = await _UsuarioHabilidadesService.eliminarUsuarioHabilidades(req.params.id)
            return res.send({ data: dataEliminar })
        } catch (err) {
            console.log(err)
            enviarError(res, err)
        }
    }

}


module.exports = new UsuarioHabilidadesController()