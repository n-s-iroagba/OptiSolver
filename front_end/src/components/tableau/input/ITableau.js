import React from 'react'
import BasicVariables from '../../tableau_components/input/BasicVariables';
import BasicCoefficients from '../../tableau_components/input/BasicCoefficients';
import ConstraintEquations from'../../tableau_components/input/ConstraintEquations';
import Constants from '../../tableau_components/input/Constants';
import { useContext } from 'react';
import { MatrixContext } from '../../../context/SimplexContext';
import '../Tableau.css'
import Ratio from '../../tableau_components/input/Ratio';


const IterationTableau = () => {
    const {iTableau, setITableau} = useContext(MatrixContext)
    

    return <>
     
        <div className='tableau'>
        <BasicCoefficients setTableau={setITableau} tableau={iTableau}/>
        <BasicVariables setTableau={setITableau} tableau={iTableau} type='iteration'/>
        <ConstraintEquations crow={true} setTableau={setITableau} tableau={iTableau} objectiveCoefficients = 'iteration'/>
        <Constants fValue ='iteration' setTableau={setITableau} tableau={iTableau} />
        <Ratio/>
        </div>
    
    </>
}
export default IterationTableau;