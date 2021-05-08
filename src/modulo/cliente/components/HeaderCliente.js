import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import AuthContext from '../../../context/authLoginClienteContext'
import CarritoContext from '../../../context/carritoContext'
const HeaderCliente = ({history}) => {

    const { clientelogueado } = useContext(AuthContext)

    const { carrito } = useContext(CarritoContext);



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 navbar__clientelogueado mb-2 " >
                <NavLink className="navbar-brand" to='/cliente/home'>MY FIT <span className='text-warning'>TEAM</span></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto d-flex ul__princi ">
                        <li className="nav-item">
                            <span className="nav-link text-center" style={{ fontSize: '20px' }}> Usuario : {clientelogueado.primerNombre + '  ' + clientelogueado.apellidoPaterno}</span>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white btn ml-3 mr-3 p-2" exact activeClassName="active bg-warning"
                                to="/cliente/home">INICIO</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white btn ml-3 mr-3 p-2" exact activeClassName="active  bg-warning"
                                to="/cliente/carrito">CARRITO ({carrito.length})</NavLink>
                        </li>
                       

                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex justify-content-center" >
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                        <button
                            className="btn btn-outline-warning my-2 my-sm-0 ml-2 "
                            onClick={() => {
                                localStorage.removeItem("user")
                                history.push('/')
                            }}
                        > Cerrar Sesion</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default withRouter(HeaderCliente)
