const prisma = require('../prisma/db.prisma')

class EscolaridadService {
    constructor() {

    }

    async obtenerTodosEscolaridad() {
        const allEscolaridad = await prisma.escolaridad.findMany({
            orderBy: {
                id_escolaridad: 'asc'
            }
        })
        return allEscolaridad
    }

}

module.exports = EscolaridadService