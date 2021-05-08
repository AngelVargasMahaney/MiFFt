import React from 'react'
import { Switch, Route } from "react-router-dom"
import FooterHome from './components/FooterHome'
import HeaderHome from './components/HeaderHome'
import Inicio from './pages/inicio/Inicio'
import ProfesionalesListaHome from './pages/listaProfesionales/ProfesionalesListaHome'
import LoginCliente from './pages/loginCliente/LoginCliente'
import NosotrosHome from './pages/Nosotros/NosotrosHome'
import RegistroCliente from './pages/registroCliente/RegistroCliente'
// Estilos del HOME
import './../../styles/homeStyle.css'
import './../../styles/clienteStyle1.css'
import Error404Page from './pages/Error404Page'

const HomeRouter = () => {
    return (
        <>

            <HeaderHome />

            <Switch>

                <Route path='/nuestros-Profesionales' exact>
                    <ProfesionalesListaHome/>
                </Route>
                <Route path='/nosotros' exact>
                    <NosotrosHome/>
                </Route>

                <Route path='/loginCliente' exact>
                    <LoginCliente />
                </Route>
                <Route path='/registroCliente' exact> 
                    <RegistroCliente />
                </Route>
                <Route path='/' exact>
                    <Inicio />
                </Route>
                <Route component={Error404Page}/>
            </Switch>
            
            <FooterHome />


        </>
    )
}

export default HomeRouter
