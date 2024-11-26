import axios from 'axios'
import { host } from '../configuraciones'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const dataInicial = {
    data: [],
}

const OBTENER_TODOS_NIVEL_ESCOLARIDAD = 'OBTENER_TODOS_NIVEL_ESCOLARIDAD'

export const obtenerTodosEscolaridad = createAsyncThunk(
    OBTENER_TODOS_NIVEL_ESCOLARIDAD,
    async () => {
        try {
            const fullUrl = host + `Escolaridad/obtenerTodosEscolaridad`
            const res = await axios.get(fullUrl)
            console.log("DUCK ESCOLARIDAD: ", res)
            return res.data.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const EscolaridadSlice = createSlice({
    initialState: dataInicial,
    name: 'EscolaridadSlice',
    reducers: {},
    extraReducers: {
        [obtenerTodosEscolaridad.fulfilled] : (state, {payload}) => {
            state.data = payload
        },
    },
})

export const { } = EscolaridadSlice.actions

export const EscolaridadReducer = EscolaridadSlice.reducer