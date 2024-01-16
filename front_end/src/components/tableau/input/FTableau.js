import React, { useContext } from "react";
import HBasicCoefficients from "../../tableau_components/history/HBasicCoefficients";
import Ratio from "../../tableau_components/input/Ratio";
import HBasicVariables from  "../../tableau_components/history/HBasicVariables";
import HConstraintEquations from  "../../tableau_components/history/HConstraintEquations";
import HConstants from  "../../tableau_components/history/HConstants";
import '../Tableau.css'
import { MatrixContext } from "../../../context/SimplexContext";

const FirstIterationTableau = () => {
const {tableau} = useContext(MatrixContext)

    return (
        <div  className='tableau'>
            <HBasicCoefficients basicCoefficients ={tableau.basicCoefficients}/>
            <HBasicVariables basicVariables = {tableau.basicVariables} text='crow'/>
            <HConstraintEquations crow = 'iteration' constraintEquations ={tableau.constraintEquations}/>
            <HConstants fValue ='iteration' constants ={tableau.constants}/>
            <Ratio/>
        </div>
    )
}
export default FirstIterationTableau; 