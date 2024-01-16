import React from "react";
import HBasicCoefficients from "./history/HBasicCoefficients";
i
import HBasicVariables from "./history/HBasicVariables";
import HConstraintEquations from "./history/HConstraintEquations";
import HConstants from "./history/HConstants";
import '../Tableau.css'
import HRatio from "../../tableau_components/history/HRatio";

const HITableau = () => {
    return (
        <div className='tableau'>
            <HBasicCoefficients/>
            <HBasicVariables/>
            <HConstraintEquations/>
            <HConstants/>
            <HRatio/>
        </div>
    )
}
export default HITableau; 