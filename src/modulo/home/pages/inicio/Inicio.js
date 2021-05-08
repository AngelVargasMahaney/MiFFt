import React, {useState,useEffect} from 'react'
import { getEmpleados } from '../../../../services/homeService'
import ProfesionalesHome from '../../components/profesionales/ProfesionalesHome'

const Inicio = () => {
    const [profesionales, setProfesionales] = useState([])
    useEffect(() => {
        getEmpleados().then(rpta => {
            setProfesionales(rpta.data)
        })

    }, [])

    return (
        <>
            <ProfesionalesHome profesionales={profesionales} />
        </>
    )
}

export default Inicio