import React from 'react'
import { withRouter } from 'react-router-dom'

const OfertaCliente = ({ profesional,ofertasInfo,history }) => {
    // console.log("SERAPARNDO")
    //  console.log(profesionales)

    //const { ofertasInfo } = useContext(OfertasContext)
    // console.log(ofertasInfo.data)

    // console.log(profesional.linkFoto)

    


    return (
        <>
            <div className="card">
                <img src={profesional.linkFoto} alt="" className="card-img-top" />
                <div className="card-body">

                    <h4 className="card-title">NOM<span className="yellow">BRE</span></h4>
                    <p className="card-text">{profesional.primerNombre}</p>
                    <h4 className="card-title">DÍA<span className="yellow"> D</span>E <span
                        className="yellow">OFERTA</span></h4>
                    {/* <p className="card-text">{ofertasInfo.data[0].diaDeOferta}</p> */}
                    <p className="card-text">{ofertasInfo[profesional.id]?.diaDeOferta}</p>
                    {/* <p className="card-text">a</p> */}
                    <h4 className="card-title"> HO<span className="yellow">RA</span></h4>
                    <p className="card-text"> {ofertasInfo[profesional.id]?.horaDeInicio}</p>
                    {/* <p className="card-text"> as</p> */}
                    <h4 className="card-title"> COS<span className="yellow">TO</span></h4>
                    <p className="card-text">S/. {ofertasInfo[profesional.id]?.costo} </p>
                    {/* <p className="card-text">S/. {ofertasInfo.data[0].costo} </p> */}
                    <button type="button" className="btn btn-warning" onClick={()=>{
                        history.push(`/cliente/profesional/descripcion/${profesional.id}`)
                    }}>Agregar</button>

                </div>
            </div>



        </>
    )
}

export default withRouter(OfertaCliente)
