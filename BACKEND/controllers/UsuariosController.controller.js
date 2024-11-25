const { UsuariosService } = require('../services')
const multer = require('multer');
const {aws} = require('../helpers/index')
//const { enviarError } = require('../utileria')
//const jwt = require('jsonwebtoken');
const { secret } = require("../config");
let _UsuariosService = null

const upload = multer({
    storage: multer.memoryStorage(), // Utilizamos memoria para almacenar temporalmente
    limits: { fileSize: 10 * 1024 * 1024 }, // Limite de tamaño de archivo (por ejemplo, 10MB)
  });

class UsuariosController {
    constructor() {  
        _UsuariosService = new UsuariosService()
    }

    async obtenerTodosUsuarios(req, res) {
        try {
            const allUsuarios = await _UsuariosService.obtenerTodosUsuarios()
            return res.send({ data: allUsuarios })
        } catch (error) {
            console.log(error);
            enviarError(res, error)
        }
    }

    async obtenerUsuario(req, res) {
        try {
            const usuario = await _UsuariosService.obtenerUsuario(req.params.id)
            return res.send({ data: usuario })
        } catch (error) {
            console.log(error);
            enviarError(res, error)
        }
    }

    async agregarUsuario(req, res) {
        try {
            const dataAgregar = await _UsuariosService.agregarUsuario(req.body)
            return res.send({ data: dataAgregar })
        } catch (err) {
            console.log(err)
            enviarError(res, err)
        }
    }

    async actualizarUsuario(req, res) {
        try {
            let dataActualizada = await _UsuariosService.actualizarUsuario(req.body)
            return res.send({ data: dataActualizada })
        } catch (err) {
            console.log(err);
            enviarError(res, err)
        }
    }

    async uploadImage (req, res) {
        try {
          const file = req.file; 
          if (!file) {
            return res.status(400).json({ error: 'No image uploaded' });
          }
      
          // Llamamos al servicio para subir la imagen al bucket
          const result = await aws.uploadImage(file);
          res.status(200).json({ message: 'Image uploaded successfully', url: result.Location });
        } catch (error) {
          res.status(500).json({ error: 'Failed to upload image', details: error.message });
        }
      };

}


module.exports = new UsuariosController()