import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../../context/authLoginClienteContext'
import { getEmpleados, getOfertasTodas} from '../../../../services/homeService'
import CarruselCliente from '../../components/CarruselCliente'
import OfertasCliente from '../../components/Ofertas/OfertasCliente'




const PantallaPrincipalClienteLogueado = () => {
    const { clientelogueado } = useContext(AuthContext)


    const [profesionales, setProfesionales] = useState([])
    const [ofertasInfo, setOfertasInfo] = useState([])

    useEffect(() => {
        
        getOfertasTodas().then(rpta=>{
            setOfertasInfo(rpta.data)
        })
        
    }, [])
    // console.log(ofertasInfo)
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        getEmpleados().then((rpta) => {
            setProfesionales(rpta.data);
            setCargando(false)
        })

    }, [])
    //  console.log("SERAPARNDO")
    //  console.log(profesionales)
    //  console.log(ofertasInfo.data)

    return (
        !cargando ?
            <div>
                <CarruselCliente />
                <h2 className='text-white text-center '>Bienvenido <span className="letra">{clientelogueado.primerNombre}</span></h2>
                <main className='container pt-3 sidebar__contenidos'>
                    <h1 className='text-white text-center'>NUESTRAS <span className="yellow">OFERTAS</span></h1>
                    <div className="row ">
                        <div className="col-md-12 ">
                            <OfertasCliente profesionales={profesionales} ofertasInfo={ofertasInfo} />
                        </div>
                    </div>
                </main>
            </div> :

            <div style={{ height: '100vh' }}>
                <div className="progress  m-5 "  >
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }} ></div>
                </div>
            </div>
    )
}

export default PantallaPrincipalClienteLogueado
