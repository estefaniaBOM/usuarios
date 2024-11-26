const { HabilidadesService } = require('../services')
const { enviarError } = require('../utileria')
//const jwt = require('jsonwebtoken');
const { secret } = require("../config");
let _HabilidadesService = null

class HabilidadesController {
    constructor() {  
        _HabilidadesService = new HabilidadesService()
    }

    async obtenerTodosHabilidades(req, res) {
        try {
            const allHabilidades = await _HabilidadesService.obtenerTodosHabilidades()
            return res.send({ data: allHabilidades })
        } catch (error) {
            console.log("ERRORRRRRRRRR: ", error);
            enviarError(res, error)
        }
    }

}


module.exports = new HabilidadesController()