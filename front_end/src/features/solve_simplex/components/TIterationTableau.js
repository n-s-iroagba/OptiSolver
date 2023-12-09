import React from 'react'
import IBasicVariables from '../../../components/tableau/iterationTableau/IBasicVariables'
import IBasicCoefficients from '../../../components/tableau/iterationTableau/IBasicCoefficients';
import IConstraintEquations from '../../../components/tableau/iterationTableau/IConstraintEquations';
import IConstants from '../../../components/tableau/iterationTableau/IConstants';


const TIterationTableau = () => {

    return <>

        <div className='wrapper' >
            <div className='tableau'>
            <IBasicCoefficients />
            <IBasicVariables />
            <IConstraintEquations />
            <IConstants />
            </div>
        </div>
    </>
}
export default TIterationTableau;