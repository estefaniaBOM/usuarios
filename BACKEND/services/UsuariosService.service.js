const prisma = require('../prisma/db.prisma')

class UsuariosService {
    constructor() {

    }

    async obtenerTodosUsuarios() {
        const allUsuarios = await prisma.usuarios.findMany({
            orderBy: {
                id_usuario: 'asc'
            },
            include: {
                escolaridad: true,
                usuario_habilidades: {
                    include: {
                        habilidades: true
                    }
                }
            }
        })
        return allUsuarios
    }

    async obtenerUsuario(id_usuario) {
        const usuario = await prisma.usuarios.findMany({
            where: {
                id_usuario: Number(id_usuario),
            },
            include: {
                escolaridad: true,
                usuario_habilidades: {
                    include: {
                        habilidades: true
                    }
                }
            }
        })
        return usuario
    }

    async agregarUsuario(data) {
        const dataAgregar = await prisma.usuarios.create(data);
        return dataAgregar;
    }

    async actualizarUsuario(data) {
        let id = data.data.id_usuario;
        delete data.data.id_usuario;
        const dataUsuarioActualizada = await prisma.usuarios.update({
            where: {
                id_usuario: Number(id),
            },
            data: data.data,
        });

        return dataUsuarioActualizada;
    }

}

module.exports = UsuariosService