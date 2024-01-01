import React from 'react'
import BasicVariables from '../../../components/tableau/initialTableau/BasicVariables';
import BasicCoefficients from '../../../components/tableau/initialTableau/BasicCoefficients';
import ConstraintEquations from '../../../components/tableau/initialTableau/ConstraintEquations';
import Constants from '../../../components/tableau/initialTableau/Constants';
import Ratio from '../../../components/tableau/initialTableau/Ratio';
import '../assets/tableau.css'

const InitialTableau = () => {
    

    return <>
     
        <div className='tableau'>
        <BasicCoefficients/>
        <BasicVariables/>
        <ConstraintEquations/>
        <Constants/>
        <Ratio/>
        </div>
    
    </>
}
export default InitialTableau;