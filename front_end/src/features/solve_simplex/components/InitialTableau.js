import React from 'react'
import BasicVariables from '../../../components/tableau/initialTableau/BasicVariables';
import BasicCoefficients from '../../../components/tableau/initialTableau/BasicCoefficients';
import ConstraintEquations from '../../../components/tableau/initialTableau/ConstraintEquations';
import Constants from '../../../components/tableau/initialTableau/Constants';
import '../assets/tableau.css'

const InitialTableau = () => {
    

    return <>
       < div className='wrapper'>
        <div className='tableau'>
        <BasicCoefficients/>
        <BasicVariables/>
         <ConstraintEquations/>  
         <Constants/>
        </div>
        &nbsp;
        
        </div>
    
    </>
}
export default InitialTableau;