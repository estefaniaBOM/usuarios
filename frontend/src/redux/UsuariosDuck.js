import axios from 'axios'
import { host } from '../configuraciones'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

/**DATOS INICIALES */
const dataInicial = {
    data: [],
}

const OBTENER_TODOS_USUARIOS = 'OBTENER_TODOS_USUARIOS'
const AGREGAR_USUARIO = 'AGREGAR_USUARIO'

export const obtenerTodosUsuarios = createAsyncThunk(
    OBTENER_TODOS_USUARIOS,
    async () => {
        try {
            const fullUrl = host + `Usuarios/obtenerTodosUsuarios`
            const res = await axios.get(fullUrl)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const agregarUsuario = createAsyncThunk(
    AGREGAR_USUARIO,
    async (data) => {
        try {
            const urlAgregarUsuario = host + `Usuarios/agregarUsuario`
            const urlAgregarUsuarioHabilidades = host + `UsuarioHabilidades/agregarUsuarioHabilidades`

            const resUsuarios = await axios.post(urlAgregarUsuario, { data: data.dataUsuario })

            for (const i in data?.dataUsuarioHabilidades){

                let usuarioHabilidades = {
                    id_usuario: Number(resUsuarios?.data?.data?.id_usuario),
                    id_habilidad: Number(data?.dataUsuarioHabilidades?.[i])
                }

                await axios.post(urlAgregarUsuarioHabilidades, { data: usuarioHabilidades })

            }
            return resUsuarios.data.data
        } catch (error) {
            console.log(error);
        }
    }
)

export const UsuariosSlice = createSlice({
    initialState: dataInicial,
    name: 'UsuariosSlice',
    reducers: {
    },
    extraReducers: {
        [obtenerTodosUsuarios.fulfilled] : (state, {payload}) => {
            state.data = payload
        },
    },
})

export const { } = UsuariosSlice.actions

export const UsuariosReducer = UsuariosSlice.reducer