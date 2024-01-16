import React from "react";
import HBasicCoefficients from "./history/HBasicCoefficients";
i
import HBasicVariables from "./history/HBasicVariables";
import HConstraintEquations from "./history/HConstraintEquations";
import HConstants from "./history/HConstants";
import '../Tableau.css'

const HTableau = () => {
    return (
        <div>
            <HBasicCoefficients/>
            <HBasicVariables/>
            <HConstraintEquations/>
            <HConstants/>
       
        </div>
    )
}
export default HTableau; 