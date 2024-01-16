import React from "react";
import RBasicCoefficients from "../../tableau_components/response/RBasicCoefficients";
import RBasicVariables from "../../tableau_components/response/RBasicVariables";
import RConstraintEquations from"../../tableau_components/response/RConstraintEquations";
import RConstants from"../../tableau_components/response/RConstants";
import '../Tableau.css'

const TerminalResponseTableau = () => {
    return (
        <div className="tableau">
            <RBasicCoefficients/>
            <RBasicVariables/>
            <RConstraintEquations/>
            <RConstants fValue ='iteration'  rightEnd ={true}/>
            <RConstants fValue ='objective' rightEnd ={true}/>
        </div>
    )
}
export default TerminalResponseTableau;