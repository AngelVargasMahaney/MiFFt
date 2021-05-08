import React from 'react'
import OfertaCliente from './OfertaCliente'


const OfertasCliente = ({ profesionales,ofertasInfo }) => {

    return (
        <div className="row mb-3 ">
            {
                profesionales.map((profesional, i) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-4" key={i}>
                        <OfertaCliente profesional={profesional} ofertasInfo = {ofertasInfo} />
                    </div>)
                )
            }
        </div>

    )
}

export default OfertasCliente
