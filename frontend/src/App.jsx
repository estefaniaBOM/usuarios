import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Login from './pages/Login';
import Usuarios from './pages/Usuarios'
import RegistrarEditarUsuario from './pages/RegistrarEditarUsuario';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Usuarios" exact component={Usuarios} />
      <Route path="/RegistrarEditarUsuario" exact component={RegistrarEditarUsuario} />
      </Switch>
    </Router>
  );
}

export default App;
