import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import TextField from "@mui/material/TextField"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button'

function Login() {

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


  return (
    <div style={{backgroundColor: '#b5cdf9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
      <ThemeProvider theme={theme}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <div className="shadow rounded-4" style={{ width: '40%', height: 'auto', backgroundColor: 'white', color: '#202c49' }} >
            <h3 className='text-center'>Iniciar sesión</h3>
            <div className="row mt-3">
              <p className='col-2 ps-5 align-items-top mb-2'><AlternateEmailIcon /></p>
              <TextField className='col-10 mb-2 pe-5' size='small' placeholder='correo electrónico' />
            </div>
            <div className="row mt-1">
              <p className='col-2 ps-5 align-items-top mb-2'><LockIcon /></p>
              <TextField type="password" className='col-10 mb-2 pe-5' size='small' placeholder='contraseña' />
            </div>
            <div className="row mt-3 pb-4 justify-content-center">
              <Button variant="contained" color="primary" style={{ width: '50%' }} >Iniciar sesión</Button>
            </div>

          </div>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default withRouter(Login)