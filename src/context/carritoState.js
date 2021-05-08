import React, { useState } from 'react'
import CarritoContext from './carritoContext';

const CarritoState = (props) => {

    const [carrito, setCarrito] = useState([]);

    console.log(carrito)

    const agregarAlCarrito = (objProfesional, cantidad = 1) => {
        setCarrito([...carrito, objProfesional])
    }

    const eliminarOferta = id => {
        let carritoTemporal = [...carrito];
        let posicion = carritoTemporal.findIndex((objProducto) => objProducto.id === id)
        carritoTemporal.splice(posicion, 1);
        setCarrito(carritoTemporal);
    }
    return (
        <CarritoContext.Provider value={{
            carrito: carrito,
            agregarAlCarrito: agregarAlCarrito,
            eliminarOferta:eliminarOferta
        }}>
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoState
