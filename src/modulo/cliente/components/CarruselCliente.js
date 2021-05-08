import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../../assets/img/1.jpg'
import img2 from '../../../assets/img/2.jpg'
import img3 from '../../../assets/img/3.jpg'

const CarruselCliente = () => {

    return (
        <>
            <div className="d-flex justify-content-center py-5">
                <Carousel>
                    <Carousel.Item interval={5000}>

                        <img
                           className="img-fluid border__imagen "
                            src={img1}
                            alt="First slide"
                        />


                        <Carousel.Caption className="carrusel__info">
                            <h3 className="letra">Nutrici<span className="amarillo">onistas</span></h3>
                            <p className="letra">Los profesionales de la salud más solicitados de la ciudad.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={8000}>
                        <img
                            className="img-fluid"
                            src={img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="carrusel__info">
                            <h3>Kick <span className="amarillo">Boxing</span></h3>
                            <p>Deporte de combate de origen Japonés al alcance de tus manos.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={11000}>
                        <img
                            className="img-fluid "
                            src={img3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className="carrusel__info">
                            <h3>Cuidado <span className="amarillo">Especial</span></h3>
                            <p>Entrenamiento personalizado a personas de la tercera edad.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

             
        </>
    )
}

export default CarruselCliente
