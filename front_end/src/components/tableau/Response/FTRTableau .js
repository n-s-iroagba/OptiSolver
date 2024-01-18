import React from "react";
import { useContext } from "react";
import { MatrixContext } from "../../../context/SimplexContext";
import HBasicCoefficients from "../../tableau_components/history/HBasicCoefficients";
import HBasicVariables from "../../tableau_components/history/HBasicVariables";
import HConstraintEquations from "../../tableau_components/history/HConstraintEquations";
import HConstants from "../../tableau_components/history/HConstants";
import '../Tableau.css'
const FTRTableau = () => {
    const{tableau} = useContext(MatrixContext)
    return (
        <div className="tableau">
           <HBasicCoefficients basicCoefficients ={tableau.basicCoefficients}/>
            <HBasicVariables basicVariables = {tableau.basicVariables} text='crow'/>
            <HConstraintEquations crow = 'response' constraintEquations ={tableau.constraintEquations}/>
            <HConstants fValue ='response' constants ={tableau.constants}/>
        </div>
    )
}
export default FTRTableau;