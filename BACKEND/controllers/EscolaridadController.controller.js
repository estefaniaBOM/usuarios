const { EscolaridadService } = require('../services')
const { enviarError } = require('../utileria')
//const jwt = require('jsonwebtoken');
const { secret } = require("../config");
let _EscolaridadService = null

class EscolaridadController {
    constructor() {  
        _EscolaridadService = new EscolaridadService()
    }

    async obtenerTodosEscolaridad(req, res) {
        try {
            const allEscolaridad = await _EscolaridadService.obtenerTodosEscolaridad()
            return res.send({ data: allEscolaridad })
        } catch (error) {
            console.log(error);
            enviarError(res, error)
        }
    }

}


module.exports = new EscolaridadController()