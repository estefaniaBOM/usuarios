const prisma = require('../prisma/db.prisma')

class UsuarioHabilidadesService {
    constructor() {

    }

    async obtenerUsuarioHabilidades(id_usuario) {
        const allUsuarioHabilidades = await prisma.usuario_habilidades.findMany({
            where: {
                id_usuario: Number(id_usuario),
            },
            orderBy: {
                id_usuario_habilidades: 'asc'
            },
            include: {
                usuarios: {
                    include: {
                        escolaridad: true
                    }
                },
                habilidades: true
            }
        })
        return allUsuarioHabilidades
    }

    async agregarUsuarioHabilidades(data) {
        const dataAgregar = await prisma.usuario_habilidades.create(data);
        return dataAgregar;
    }

    async eliminarUsuarioHabilidades(id_usuario) {
        const dataEliminar = await prisma.usuario_habilidades.deleteMany({
            where: {
                id_usuario: Number(id_usuario),
            }
        });
        return dataEliminar;
    }

}

module.exports = UsuarioHabilidadesService