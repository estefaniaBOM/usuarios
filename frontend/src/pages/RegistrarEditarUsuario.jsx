import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import TextField from "@mui/material/TextField"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import moment from 'moment'
import Button from '@mui/material/Button'

import { obtenerTodosEscolaridad } from '../redux/EscolaridadDuck';

function RegistrarEditarUsuario() {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#C0DA74"
            },
            secondary: {
                main: "#202c49"
            },
            tertiary: {
                main: "#F4BF55"
            }
        },
        typography: {
            button: {
                fontSize: 16,
                fontWeight: 500,
                textTransform: 'none',
            },
            allVariants: {
                //fontFamily: 'sans-serif',
                fontSize: 'small',
                color: "#202c49"
            },
        }
    });

    let fechaActual = Date();

    const todosEscolaridad = useSelector(store => store.Escolaridad.data)
    console.log("LISTA DE ESCOLARIDAD: ", todosEscolaridad)

    const [escolaridad, setEscolaridad] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [apellidoP, setApellidoP] = React.useState('');
    const [apellidoM, setApellidoM] = React.useState('');
    const [curp, setCurp] = React.useState('');
    const [fechaNacimiento, setFechaNacimiento] = React.useState(dayjs(fechaActual));

    


    return (
        <div style={{ backgroundColor: '#b5cdf9', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
            <ThemeProvider theme={theme}>
                <div className="container shadow rounded-4 m-5" style={{ width: '60%', color: '#202c49', padding: 0, backgroundColor: 'white' }}>
                    <h3 className='mt-3 col-12 text-center'>Registrar nuevo Usuario</h3>
                    <div className='row m-3'>
                        <div className='col-4 mb-3'>
                            <p className='mb-0'>Nombre(s)</p>
                            <TextField
                                className='col-12 p-0'
                                size='small'
                                value={nombre}
                                error={nombre.length < 3 || nombre.length > 20}
                                helperText={(nombre.length < 3 || nombre.length > 20) ? 'Ingrese un nombre válido' : ' '}
                                inputProps={{ style: { textTransform: "capitalize" } }}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    if (value !== "" && !/^[a-zA-Z\s]+$/.test(value)) {
                                        return;
                                    }
                                    setNombre(value);
                                }}
                            />
                        </div>
                        <div className='col-4 mb-3'>
                            <p className='mb-0'>Apellido paterno</p>
                            <TextField
                                className='col-12 p-0'
                                size='small'
                                value={apellidoP}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    if (value !== "" && !/^[a-zA-Z]+$/.test(value)) {
                                        return;
                                    }
                                    setApellidoP(value);
                                }}
                                error={apellidoP.length <= 0 || apellidoP.length > 15}
                                helperText={(apellidoP.length <= 0 || apellidoP.length > 15) ? 'Ingrese un apellido válido' : ' '}
                                inputProps={{ style: { textTransform: "capitalize" } }}

                            />
                        </div>
                        <div className='col-4 mb-3'>
                            <p className='mb-0'>Apellido Materno</p>
                            <TextField
                                className='col-12 p-0'
                                size='small'
                                value={apellidoM}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    if (value !== "" && !/^[a-zA-Z]+$/.test(value)) {
                                        return;
                                    }
                                    setApellidoM(value);
                                }}
                                error={apellidoM.length <= 0 || apellidoM.length > 15}
                                helperText={(apellidoM.length <= 0 || apellidoM.length > 15) ? 'Ingrese un apellido válido' : ' '}
                                inputProps={{ style: { textTransform: "capitalize" } }}

                            />
                        </div>
                        <div className='col-4 mb-3'>
                            <p className='mb-0'>CURP</p>
                            <TextField
                                className='col-12 p-0'
                                size='small'
                                value={curp}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    if (value !== "" && !/^[a-zA-Z0-9]+$/.test(value)) {
                                        return;
                                    }
                                    setCurp(value);
                                }}
                                error={curp.length != 18}
                                helperText={curp.length != 18 ? 'Ingrese un curp válido' : ' '}
                                inputProps={{ style: { textTransform: "uppercase" } }}
                            />
                        </div>
                        <div className='col-4 mb-3'>
                            <p className='mb-0'>Fecha de nacimiento</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker
                                    sx={{ width: "100% " }}
                                    slotProps={{ textField: { size: 'small' } }}
                                    value={fechaNacimiento}
                                    onChange={(newFechaNacimiento) => setFechaNacimiento(newFechaNacimiento)}
                                    format="DD-MM-YYYY"
                                    maxDate={moment().subtract(18, 'years')}
                                />
                            </LocalizationProvider>
                        </div>
                        <div className='col-4 mb-3'>
                            <p className='mb-0'>Nivel de escolaridad</p>
                            <FormControl fullWidth size="small">
                                <Select
                                    value={escolaridad}
                                    onChange={event => setEscolaridad(event.target.value)}
                                >
                                    <MenuItem value='1'>Básico</MenuItem>
                                    <MenuItem value='2'>Medio superior</MenuItem>
                                    <MenuItem value='3'>Superior</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='row border border-2' style={{ width: '95%', margin: '0 auto' }}>
                            <p className='mb-1'>Habilidades</p>
                            <div className="col-6 form-check mb-1 ps-5">
                                <input className={`form-check-input`} type="checkbox" />
                                <label className="form-check-label">Conocimiento de lenguajes de programación</label>
                            </div>
                            <div className="col-6 form-check mb-1 ps-5">
                                <input className={`form-check-input`} type="checkbox" />
                                <label className="form-check-label">Capacidad de análisis</label>
                            </div>
                            <div className="col-6 form-check mb-1 ps-5">
                                <input className={`form-check-input`} type="checkbox" />
                                <label className="form-check-label">Habilidades de resolución de problemas</label>
                            </div>
                            <div className="col-6 form-check mb-1 ps-5">
                                <input className={`form-check-input`} type="checkbox" />
                                <label className="form-check-label">Trabajo en equipo</label>
                            </div>
                            <div className="col-6 form-check mb-1 ps-5">
                                <input className={`form-check-input`} type="checkbox" />
                                <label className="form-check-label">Adaptación al cambio</label>
                            </div>
                            <div className="col-6 form-check mb-1 ps-5">
                                <input className={`form-check-input`} type="checkbox" />
                                <label className="form-check-label">Habilidades interpersonales</label>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default withRouter(RegistrarEditarUsuario)