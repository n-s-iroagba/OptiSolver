import React from "react";
import { useContext } from "react";
import { MatrixContext } from "../../../context/SimplexContext";
import HBasicCoefficients from "../../tableau_components/history/HBasicCoefficients";
import HBasicVariables from "../../tableau_components/history/HBasicVariables";
import HConstraintEquations from "../../tableau_components/history/HConstraintEquations";
import HConstants from "../../tableau_components/history/HConstants";
import '../Tableau.css'
const TRTableau = () => {
    const{iTableau} = useContext(MatrixContext)
    return (
        <div className="tableau">
           <HBasicCoefficients basicCoefficients ={iTableau.basicCoefficients}/>
            <HBasicVariables basicVariables = {iTableau.basicVariables} text='crow'/>
            <HConstraintEquations crow = 'response' constraintEquations ={iTableau.constraintEquations}/>
            <HConstants fValue ='response' constants ={iTableau.constants} rightEnd={true}/>
        </div>
    )
}
export default TRTableau;