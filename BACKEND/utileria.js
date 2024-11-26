class Utileria {

    constructor() {

    }

    takeSkipAndTake = (offset,limit) => {
        if(offset<0) {
            offset = Number(0)
        }
        const skip = offset * limit
        const take = limit
        return {skip, take}
    }

    enviarError = (res, err) => {
        const httpStatus = err.status || 500;
        return res.status(httpStatus).send({
            status: httpStatus,
            message: err.meta || "Internal server error"
        })
    }

    obtenerEstatus = (idestatus) => {
        switch (idestatus) {
            case 1:
                return 'Borrador'
            case 2:
                return 'Enviado'
            case 3:
                return 'Revision'
            case 4:
                return 'Aceptado'
            case 5:
                return 'Denegado'
            case 6:  
                return 'Corregidas'
            default:
                return 'Estatus invalido'
        }
    }

}
module.exports = new Utileria()