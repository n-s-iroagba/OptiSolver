import React from 'react'
import RBasicVariables from '../../../components/tableau/responseTableau/RBasicVariables';
import RBasicCoefficients from '../../../components/tableau/responseTableau/RBasicCoefficients';
import RConstraintEquations from '../../../components/tableau/responseTableau/RConstraintEquations';
import RConstants from '../../../components/tableau/responseTableau/RConstants';
import '../assets/tableau.css'

const TResponseTableau = () => {
    return <>
        <div className='wrapper' >
        <div className='tableau'>
            <RBasicCoefficients/>
            <RBasicVariables/>
            <RConstraintEquations/>
            <RConstants/>
        </div>
        </div>
    </>
}
export default TResponseTableau;