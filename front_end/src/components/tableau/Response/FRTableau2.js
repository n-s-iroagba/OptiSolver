import React from "react";
import HBasicCoefficients from "../../tableau_components/history/HBasicCoefficients";
import HBasicVariables from "../../tableau_components/history/HBasicVariables";
import HConstraintEquations from "../../tableau_components/history/HConstraintEquations";
import HConstants from"../../tableau_components/history/HConstants";
import '../Tableau.css'

import { useContext } from "react";
import { MatrixContext } from "../../../context/SimplexContext";

import '../Tableau.css'

const FRTableau2 = () => {
  
     
const {tableau} = useContext(MatrixContext)
    return (
        <div  className='tableau'>
            <HBasicCoefficients basicCoefficients ={tableau.basicCoefficients}/>
            <HBasicVariables basicVariables = {tableau.basicVariables}/>
            <HConstraintEquations  crow = 'response' constraintEquations ={tableau.constraintEquations}/>
            <HConstants fValue ='response' constants ={tableau.constants} rightEnd={true}/>
        </div>
    )
}
export default FRTableau2; 
