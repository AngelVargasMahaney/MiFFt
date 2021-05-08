import React, { useContext } from 'react'
import CarritoContext from '../../../../context/carritoContext'
import { NotificationManager , NotificationContainer} from "react-notifications";
const CarritoPage = () => {
    const { carrito, eliminarOferta } = useContext(CarritoContext)
    console.log(carrito)

    let total = carrito.reduce((sumatoria, objOferta) => {
        return sumatoria + (objOferta.costo * 1)
    }, 0);

    return (
        // <div>
        //     <p className="text-center" style={{color:'white'}}>HOLS</p>
        // </div>

        <main className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>DNI</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carrito.map((objOferta, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{objOferta.diaDeOferta}</td>
                                            <td>{objOferta.horaDeInicio}</td>
                                            <td>{objOferta.dniEmpleado}</td>
                                            <td>S/ {objOferta.costo}</td>
                                            <td>
                                                <button className="btn btn-danger btn-sm"
                                                    onClick={() => {
                                                        NotificationManager.error("Eliminado!");
                                                        eliminarOferta(objOferta.id);
                                                    }}>
                                                    Eliminar&times;
                                                 </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            <tr style={{ fontSize: "19px" }}>
                                <td>Total</td>
                                <td colSpan="7" className="text-end">S/ {total.toFixed(2)}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="col-md-4"></div>
            </div>
            <NotificationContainer/>

        </main>

    )
}

export default CarritoPage
