import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminRouter from "./modulo/admin/AdminRouter";
import "./css/boletaImprimir.css";
import EmpleadoRouter from "./modulo/empleado/EmpleadoRouter";
import HomeRouter from "./modulo/home/HomeRouter";

import './styles/error404.css'
import './styles/clienteStyle1.css'
import './styles/homeStyle.css'
import './styles/inicio.css'
import './styles/mis-clientes.css'
import './styles/entrenador-descripcion.css'

import PrivateRouteCliente from "./PrivateRouteCliente";
import ClienteRouter from "./modulo/cliente/ClienteRouter";
import AuthLoginClienteState from "./context/authLoginClienteState";
import OfertasState from "./context/ofertasState";
import CarritoState from "./context/carritoState";



const App = () => {
  return (
    <AuthLoginClienteState>
      <OfertasState>
        <CarritoState>
          <Router>
            <Switch>
              <Route path="/admin">
                <AdminRouter />
              </Route>
              <Route path="/empleado">
                <EmpleadoRouter />
              </Route>
              <PrivateRouteCliente path="/cliente">
                <ClienteRouter />
              </PrivateRouteCliente>
              <Route path="/" >
                <HomeRouter />
              </Route>

            </Switch>
          </Router>
        </CarritoState>
      </OfertasState>
    </AuthLoginClienteState>
  );
};

export default App;
