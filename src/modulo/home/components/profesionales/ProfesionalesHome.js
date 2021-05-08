import React from 'react'
import CarruselHome from '../CarruselHome'
import ProfesionalHome from './ProfesionalHome'







const ProfesionalesHome = ({ profesionales }) => {
    return (
        <main className="container-fluid main__cont">
            <div className="">
                <CarruselHome />

                <h2 className="text-xl-center pt-3 pb-3 text-white">NUESTRAS ESPECIALIDADES</h2>
                <div className="row mb-4">
                    {
                        profesionales.map((objProfesional) => {
                            return (
                                <ProfesionalHome objProfesional={objProfesional} key={objProfesional.id} />
                            )
                        })
                    }

                </div>
            </div>
           
        </main>

    )
}

export default ProfesionalesHome
