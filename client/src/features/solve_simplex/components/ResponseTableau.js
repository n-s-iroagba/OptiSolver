import React, { useContext, useEffect } from 'react'
import RBasicVariables from '../../../components/tableau/responseTableau/RBasicVariables';
import RBasicCoefficients from '../../../components/tableau/responseTableau/RBasicCoefficients';
import RConstraintEquations from '../../../components/tableau/responseTableau/RConstraintEquations';
import RConstants from '../../../components/tableau/responseTableau/RConstants';
import RRatio from '../../../components/tableau/responseTableau/RRatio';
import '../assets/tableau.css'

const ResponseTableau = () => {
    return <>
        <div className='wrapper' >
        <div className='tableau'>
            <RBasicCoefficients/>
            <RBasicVariables/>
            <RConstraintEquations/>
            <RConstants/>
            <RRatio/>
        </div>
        </div>
    </>
}
export default ResponseTableau;