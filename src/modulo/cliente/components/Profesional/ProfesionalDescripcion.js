import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavLink, withRouter } from 'react-router-dom'
import CarritoContext from '../../../../context/carritoContext'
import { getEmpleadoById, getOfertas } from '../../../../services/homeService'
import { NotificationManager, NotificationContainer } from "react-notifications";

const ProfesionalDescripcion = () => {


    let params = useParams()
    let empleadoId = params.id
    const [objEmpleado, setObjEmpleado] = useState(null)
    const [objOfertas, setObjetoOfertas] = useState(null)

    // console.log("REIAJIJRIAEJIJ")
    useEffect(() => {
        getOfertas(empleadoId).then(rpta => {
            setObjetoOfertas(rpta.data)
            //console.log(rpta.data)
        })
    }, [])



    const { agregarAlCarrito } = useContext(CarritoContext)


    useEffect(() => {
        getEmpleadoById(empleadoId).then(rpta => {
            setObjEmpleado(rpta.data)
            //console.log(rpta.data)
        })
    }, [])

    return (
        <div>
            {
                // objEmpleado ?
                // <p style={{color:'white'}}>{objEmpleado.primerNombre}</p>
                // :
                // null
                objEmpleado && objOfertas ?
                    <main className="container_desc">
                        <div className="container__inside_desc">
                            <h1 className="title_user_desc">{objEmpleado.primerNombre} <span className="yellow_desc">{objEmpleado.apellidoMaterno}</span></h1>

                            <div className="row desc_desc">
                                <div className="col-md-6 flexvideo_desc">
                                    <div className="col-lg-10 wow fadeIn_desc">
                                        <div className="embed-responsive embed-responsive-16by9 wow fadeInRight_desc">
                                            <iframe className="embed-responsive-item redondear_desc"
                                                src={objEmpleado.linkVideo} allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="info__title_desc">HORARIOS<span className="yellow_desc"> DISPONIBLES</span></h2>

                                        <div className="calendario">
                                            <div className="jzdbox1 jzdbasf jzdcal">

                                                <div className="jzdcalt">Abril 2021</div>

                                                <span>Su</span>
                                                <span>Mo</span>
                                                <span>Tu</span>
                                                <span>We</span>
                                                <span>Th</span>
                                                <span>Fr</span>
                                                <span>Sa</span>


                                                <span className="jzdb">
                                                </span>
                                                <span className="jzdb">
                                                </span>
                                                <span className="jzdb">
                                                </span>
                                                <span className="jzdb">
                                                </span>
                                                <span className="jzdb">
                                                </span>
                                                <span className="jzdb">
                                                </span>
                                                <span>1</span>
                                                <span className="circle" data-title="Cita con Pedro Pérez">2</span>
                                                <span>3</span>
                                                <span>4</span>
                                                <span>5</span>
                                                <span>6</span>
                                                <span>7</span>
                                                <span>8</span>
                                                <span>9</span>
                                                <span>10</span>
                                                <span>11</span>
                                                <span className="circle" data-title="Atención Domiciliaria: Adam Cueva">12</span>
                                                <span>13</span>
                                                <span>14</span>
                                                <span>15</span>
                                                <span>16</span>
                                                <span>17</span>
                                                <span>18</span>
                                                <span>19</span>
                                                <span>20</span>
                                                <span>21</span>
                                                <span className="circle" data-title="Rutina para Rodrigo Boriges">22</span>
                                                <span>23</span>
                                                <span>24</span>
                                                <span>25</span>
                                                <span>26</span>
                                                <span>27</span>
                                                <span>28</span>
                                                <span>29</span>
                                                <span>30</span>
                                                <span className="jzdb">
                                                </span>
                                                <span className="jzdb">
                                                </span>
                                                <span className="jzdb">
                                                </span>
                                                <span className="jzdb">
                                                </span>
                                                <span className="jzdb">
                                                </span>
                                                <span className="jzdb">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 flexDatos_desc">
                                    <div className="data1_desc">
                                        <h2 className="info__title_desc">DESCRIP<span className="yellow_desc">CIÓN</span></h2>
                                        <p className="info__descripcion_desc">{objEmpleado.descripcion}</p>
                                    </div>
                                    <div className="data1_desc">
                                        <h2 className="info__title_desc">METOD<span className="yellow_desc">OLOGÍA</span></h2>
                                        <p className="info__descripcion_desc">{objEmpleado.metodologia}</p>
                                    </div>
                                    <div className="data1_desc">
                                        <h2 className="info__title_desc">SEP<span className="yellow_desc">ARA </span>T<span className="yellow_desc">U</span>
                                    CI<span className="yellow_desc">TA</span></h2>
                                        <p className="info__descripcion_desc">Si deseas separar una cita, verifica si estoy libre el día y la
                                    hora que deseas. Finalmente, haz click en el botón Agendar. </p>
                                    </div>

                                    <div className="data2">
                                        <p className="info__descripcion_desc"><i className="fas fa-map-marker-alt icono_contacto_desc"></i> {objEmpleado.direccion}
                                        </p>
                                        <p className="info__descripcion_desc"> <i className="fas fa-phone icono_contacto_desc"></i>{objEmpleado.celular}</p>
                                        <h2 className="info__descripcion_desc"><span className="yellow_desc">Calificación Promedio:</span>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </h2>
                                    </div>

                                </div>
                                <div className="botones_desc">
                                    <button type="button" className="btn btn-warning" onClick={() => {
                                        NotificationManager.success("Agregado!", "")

                                        agregarAlCarrito(objOfertas)
                                    }}><i className="fa fa-download iconno_desc"
                                        aria-hidden="true"></i>Agendar</button>
                                    <NavLink type="button" className="btn btn-warning" to="/cliente/carrito"><i className="fa fa-times-circle iconno_desc"
                                        aria-hidden="true"></i> Mi carrito</NavLink>
                                    <NavLink type="button" className="btn btn-warning" to="/cliente/home"><i className="fas fa-arrow-alt-circle-left iconno_desc"></i>
                                Regresar</NavLink>
                                </div>
                            </div>
                                    <NotificationContainer/>
                        </div>

                    </main>
                    :
                    null

            }
        </div>
    )
}

export default  ProfesionalDescripcion
