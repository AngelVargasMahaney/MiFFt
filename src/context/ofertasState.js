import React, { useState } from 'react'
import OfertasContext from './ofertasContext'

const OfertasState = (props) => {
    const [ofertasInfo, setOfertasInfo] = useState([])

 
    //console.log(ofertasInfo)

    return (
        <OfertasContext.Provider value={
            {
                ofertasInfo,
                setOfertasInfo
            }
        }>
            {props.children}
        </OfertasContext.Provider>
    )
}

export default OfertasState
