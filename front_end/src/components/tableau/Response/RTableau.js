import React from "react";
import RBasicCoefficients from "../../tableau_components/response/RBasicCoefficients";
import RRatio  from "../../tableau_components/response/RRatio"
import RBasicVariables from "../../tableau_components/response/RBasicVariables";
import RConstraintEquations from"../../tableau_components/response/RConstraintEquations";
import RConstants from"../../tableau_components/response/RConstants";
import '../Tableau.css'

const RTableau = () => {
    return (
        <div className='tableau'>
            <RBasicCoefficients/>
            <RBasicVariables/>
            <RConstraintEquations/>
            <RConstants fValue='iteration'/>
            <RRatio/>
       
        </div>
    )
}
export default RTableau; 