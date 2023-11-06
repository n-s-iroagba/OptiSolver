import React from 'react'
import FBasicVariables from '../../../components/tableau/firstIResponseTableau/FBasicVariables'
import FBasicCoefficients from '../../../components/tableau/firstIResponseTableau/FBasicCoefficients';
import FConstraintEquations from '../../../components/tableau/firstIResponseTableau/FConstraintEquations';
import FConstants from '../../../components/tableau/firstIResponseTableau/FConstants';
import FRatio from '../../../components/tableau/firstIResponseTableau/FRatio';

const IterationTableau = () => {

    return <>

        <div className='wrapper' >
            <div className='tableau'>
            <FBasicCoefficients />
            <FBasicVariables />
            <FConstraintEquations />
            <FConstants />
            <FRatio />
            </div>
        </div>
    </>
}
export default IterationTableau;