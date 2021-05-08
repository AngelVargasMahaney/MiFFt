import React from 'react'
import { Switch, Route } from "react-router-dom"
import HeaderCliente from './components/HeaderCliente'
import FotterCliente from './components/FotterCliente'
import PantallaPrincipalClienteLogueado from './pages/PantallaPricincipalClienteLogueado/PantallaPrincipalClienteLogueado'
import ProfesionalDescripcion from './components/Profesional/ProfesionalDescripcion'
import CarritoPage from './pages/Carrito/CarritoPage'

const ClienteRouter = () => {
    return (
        <>

            <HeaderCliente />
            
            <Switch>

                <Route path={'/cliente/home'}>
                    <PantallaPrincipalClienteLogueado />
                </Route>
                <Route path={'/cliente/profesional/descripcion/:id'}>
                    <ProfesionalDescripcion />
                </Route>

                <Route path={'/cliente/carrito'}>
                    <CarritoPage />
                </Route>

                {/* <Route path={'/cliente/home'}>
                    <PantallaPrincipalClienteLogueado />
                </Route>
                <Route path={'/cliente/home'}>
                    <PantallaPrincipalClienteLogueado />
                </Route> */}
            </Switch>


            <FotterCliente />
        </>
    )
}

export default ClienteRouter
