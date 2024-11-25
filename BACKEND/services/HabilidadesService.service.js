const prisma = require('../prisma/db.prisma')

class HabilidadesService {
    constructor() {

    }

    async obtenerTodosHabilidades() {
        const allHabilidades = await prisma.habilidades.findMany({
            orderBy: {
                id_habilidad: 'asc'
            }
        })
        return allHabilidades
    }

}

module.exports = HabilidadesService