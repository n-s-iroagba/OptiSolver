import React, { useContext } from 'react'
import BasicVariables from '../../../components/tableau/InitialTableau/BasicVariables';
import BasicCoefficients from '../../../components/tableau/InitialTableau/BasicCoefficients';
import ConstraintEquations from '../../../components/tableau/InitialTableau/ConstraintEquations';
import Constants from '../../../components/tableau/InitialTableau/Constants';
import '../assets/tableau.css'
import SolveButton from '../../../components/buttons/SolveButton';
import { MatrixContext } from '../context/SimplexContext';

const InitialTableau = () => {
    const {tableau,header,setPage}= useContext(MatrixContext)

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