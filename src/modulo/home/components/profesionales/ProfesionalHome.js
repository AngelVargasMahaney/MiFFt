import React from 'react'
import '../../../../styles/inicio.css'
import foto from '../../../../img/entrenador.jpg'
const ProfesionalHome = ({ objProfesional }) => {
    return (
        // <div className="col-6 col-md-4 d-flex justify-content-center carta">
        //     <div className="carta__pro">
        //         <div className="card tarjeta">
        //             <img className="card-img-top" src={objProfesional.foto} alt="Card imagen cap" />
        //             <div className="card-body body__card">
        //                 <h5 className="card-title text-center">{objProfesional.primerNombre} {objProfesional.apellidoPaterno}</h5>
        //                 <p className="card-text">Rating: <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i
        //                     className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i>
        //                 </p>
        //                 <p className="card-text">Especialidad: {objProfesional.profesion}</p>
        //                 <a href="/#" className="btn btn-warning">Ver horarios</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="col-6 col-md-4 d-flex justify-content-center carta mb-5 " >
            <div className="carta__pro" >
                <div className="card card__styl" >
                    {/* <img className="card-img-top" src={objProfesional.foto} alt="Card imagen cap"/> */}
                    <img className="card-img-top" src={foto} alt="Card imagen cap"/>
                        <div className="card-body body__card " >
                            <h5 className="card-title text-center" style={{color:'#010101'}}>{objProfesional.primerNombre} {objProfesional.apellidoPaterno}</h5>
                            <p className="card-text" style={{color:'#010101'}}>Rating: <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i
                                className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                            </p>
                            <p className="card-text" style={{color:'#010101'}}>Especialidad: {objProfesional.profesion}</p>
                            <a href="/#" className="btn btn-warning d-flex justify-content-center">Ver horarios</a>
                        </div>
                </div>
                </div>
            </div>
    )
}

export default ProfesionalHome
