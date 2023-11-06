import React from 'react'
import IBasicVariables from '../../../components/tableau/firstIResponseTableau/FBasicVariables'
import IBasicCoefficients from '../../../components/tableau/firstIResponseTableau/FBasicCoefficients';
import IConstraintEquations from '../../../components/tableau/firstIResponseTableau/FConstraintEquations';
import IConstants from '../../../components/tableau/firstIResponseTableau/FConstants';
import Ratio from '../../../components/tableau/firstIResponseTableau/FRatio';

const IterationTableau = () => {

    return <>

        <div className='wrapper' >
            <div className='tableau'>
            <IBasicCoefficients />
            <IBasicVariables />
            <IConstraintEquations />
            <IConstants />
            <Ratio />
            </div>
        </div>
    </>
}
export default IterationTableau;