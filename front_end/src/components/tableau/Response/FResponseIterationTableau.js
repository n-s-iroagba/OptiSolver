import React from "react";
import HistoryBasicCoefficients from "./history/HistoryBasicCoefficients";

import HistoryBasicVariables from "./history/HistoryBasicVariables";
import HistoryConstraintEquations from "./history/HistoryConstraintEquations";
import HistoryConstants from "./history/HistoryConstants";
import '../Tableau.css'
import RRatio  from "../../tableau_components/response/RRatio"

import '../Tableau.css'

const ResponseIterationTableau = () => {
    return (
        <div>
            <HistoryBasicCoefficients/>
            <HistoryBasicVariables/>
            <HistoryConstraintEquations/>
            <HistoryConstants/>
            <RRatio/>
       
        </div>
    )
}
export default ResponseIterationTableau; 