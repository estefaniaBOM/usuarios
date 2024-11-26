import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Button from '@mui/material/Button'

import { obtenerTodosUsuarios } from '../redux/UsuariosDuck';

function Usuarios(props) {

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

  const dispatch = useDispatch()
  const usuarios = useSelector(store => store.Usuarios.data)

  const [flag, setFlag] = React.useState(false);



  console.log("usuario: ", usuarios)

  React.useEffect(() => {
    dispatch(obtenerTodosUsuarios())
    
  }, [])

  React.useEffect(() => {
    if(flag === false){
      dispatch(obtenerTodosUsuarios())
    }

    setFlag(true)
  }, [usuarios])

  const handleRegistrarUsuario = async () => {
    props.history.push('/RegistrarEditarUsuario')
    window.location.reload();
  }

  function QuickSearchToolbar() {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
          mb: 2,
          textAlign: 'left',
          height: 30,
          width: '100%',
          backgroundColor: 'white',
          borderRadius: '10px',
        }}>
        <GridToolbarQuickFilter style={{ backgroundColor: '#F8F9F9', width: '100%' }} placeholder='Búsqueda...' />
      </Box>
    );
  }

  const columns = [
    {
      field: 'editar', headerName: '', headerAlign: 'center', flex: .1, sortable: false,
      renderCell: (params) =>
        <div className='row'>
          <div className='col-12'>
            <IconButton /*onClick={() => { changeRowUp(params.row.id) }}*/>
              <EditRoundedIcon fontSize='small' />
            </IconButton>
          </div>
        </div>
    },
    { field: 'nombre', headerName: 'NOMBRE', headerAlign: 'center', flex: .1, sortable: false },
    { field: 'curp', headerName: 'CURP', headerAlign: 'center', flex: .2, sortable: false },
    { field: 'direccion', headerName: 'DIRECCION', headerAlign: 'center', flex: .2, sortable: false },
    { field: 'fechaNacimiento', headerName: 'FECHA DE NACIMIENTO', headerAlign: 'center', flex: .2, sortable: false },
    { field: 'nivelEscolaridad', headerName: 'NIVEL DE ESCOLARIDAD', headerAlign: 'center', flex: .2, sortable: false },
    { field: 'habilidades', headerName: 'HABILIDADES', headerAlign: 'center', flex: .2, sortable: false },
  ]

  const rows = []

  usuarios?.map(usuario => {

    let aux = []
    usuario?.usuario_habilidades?.map(habilidad => (
      aux.push(habilidad.habilidades?.habilidad)
    ))

    rows.push({
      id: uuidv4(), nombre: usuario.nombre + ' ' + usuario.apellidos, curp: usuario.curp, direccion: usuario.direccion,
      fechaNacimiento: usuario.fecha_nacimiento.substring(0, 10), nivelEscolaridad: usuario.escolaridad?.nivel, habilidades: aux.join(', '), 
      informacionUsuario: usuario
    })
  })

  //const rows = [
  //  { id: 1, nombre: 'Estefania Ortega', curp: 'OEME970314MMCRRS03', direccion: 'Oaxaca Centro', fechaNacimiento: '14 Marzo 1997', nivelEscolaridad: 'Superior', habilidades: '---' },
  //  { id: 2, nombre: 'Estefania Berenice', curp: 'OEME970314MMCRRS03', direccion: 'Querétaro', fechaNacimiento: '09 Diciembre 1997', nivelEscolaridad: 'Superior', habilidades: '---' }
  //];


  return (
    <div style={{ backgroundColor: '#b5cdf9', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <ThemeProvider theme={theme}>
        <div className="container m-5" style={{ width: '100%' }}>
          <h3 className='text-center'>Usuarios</h3>
          <div className="m-3 d-flex justify-content-end">
            <Button variant="contained" color="primary" style={{ width: '20%' }} onClick={() => handleRegistrarUsuario()}>Registrar nuevo usuario</Button>
          </div>
          <div className='mt-3 pe-2' style={{ width: '100%', color: '#202c49', padding: 0 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              components={{ Toolbar: QuickSearchToolbar }}
              getRowHeight={() => 'auto'}
              headerHeight={80}
              autoHeight={true}
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
              }
              sx={{
                boxShadow: 0,
                color: 'black',
                border: 0,
                borderRadius: '10px',
                backgroundColor: 'white',
                //fontFamily: 'Montserrat',
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#202c49',
                  color: 'white',
                  //fontFamily: 'Montserrat',
                  fontSize: 'small',
                  fontWeight: 'bold',
                  height: 'auto',
                },
                '& .MuiDataGrid-cell': {
                  display: 'block',
                  position: 'relative',
                  textAlign: 'center',
                  padding: '10px 0',
                  fontSize: 'small'
                },
                ".even": {
                  background: 'white',
                  "&:hover": {
                    background: "white"
                  }
                },
                ".odd": {
                  background: '#F1F1F1',
                  "&:hover": {
                    background: "#F1F1F1"
                  }
                },
                '& .MuiDataGrid-columnHeaderTitle': {
                  textOverflow: "clip",
                  whiteSpace: "break-spaces",
                  lineHeight: 1
                }
              }}
            />
          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default withRouter(Usuarios)

