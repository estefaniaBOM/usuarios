import axios from 'axios'
import { host } from '../configuraciones'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const dataInicial = {
    data: {},
}

const OBTENER_TODOS_HABILIDADES = 'OBTENER_TODOS_HABILIDADES'

export const obtenerTodosHabilidades = createAsyncThunk(
    OBTENER_TODOS_HABILIDADES,
    async () => {
        try {
            const fullUrl = host + `Habilidades/obtenerTodosHabilidades`
            const res = await axios.get(fullUrl)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const HabilidadesSlice = createSlice({
    initialState: dataInicial,
    name: 'HabilidadesSlice',
    reducers: {},
    extraReducers: {
        [obtenerTodosHabilidades.fulfilled] : (state, {payload}) => {
            state.data = payload
        },
    },
})

export const { } = HabilidadesSlice.actions

export const HabilidadesReducer = HabilidadesSlice.reducer