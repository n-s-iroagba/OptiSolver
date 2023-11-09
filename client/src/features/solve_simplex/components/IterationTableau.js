import React from 'react'
import IBasicVariables from '../../../components/tableau/iterationTableau/IBasicVariables'
import IBasicCoefficients from '../../../components/tableau/iterationTableau/IBasicCoefficients';
import IConstraintEquations from '../../../components/tableau/iterationTableau/IConstraintEquations';
import IConstants from '../../../components/tableau/iterationTableau/IConstants';
import Ratio from '../../../components/tableau/iterationTableau/Ratio';

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