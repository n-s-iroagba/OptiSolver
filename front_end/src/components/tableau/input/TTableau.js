import React from 'react'
import BasicVariables from '../../tableau_components/input/BasicVariables';
import BasicCoefficients from '../../tableau_components/input/BasicCoefficients';
import ConstraintEquations from '../../tableau_components/input/ConstraintEquations';
import Ratio from '../../tableau_components/input/Ratio';
import Constants from '../../tableau_components/input/Constants';
import { useContext } from 'react';
import { MatrixContext } from '../../../context/SimplexContext';
import '../Tableau.css'



const TerminalIterationTableau = () => {
    const {iTableau, setITableau} = useContext(MatrixContext)

    return <>
     
        <div className='tableau'>
        <BasicCoefficients setTableau={setITableau} tableau={iTableau}/>
        <BasicVariables setTableau={setITableau} tableau={iTableau}  type='iteration' text='crow'/>
        <ConstraintEquations crow={true} setTableau={setITableau} tableau={iTableau}/>
        <Constants  fValue ='iteration' setTableau={setITableau} tableau={iTableau} rightEnd ={true} />
        </div>
    
    </>
}
export default TerminalIterationTableau;