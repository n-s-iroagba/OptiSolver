import React from "react";
import HistoryBasicCoefficients from "../../tableau_components/history/HistoryBasicCoefficients";

import HistoryBasicVariables from "../../tableau_components/history/HistoryBasicVariables";
import HistoryConstraintEquations from "../../tableau_components/history/HistoryConstraintEquations";
import HistoryConstants from"../../tableau_components/history/HistoryConstants";
import '../Tableau.css'
import RRatio  from "../../tableau_components/response/RRatio"

import '../Tableau.css'

const FResponseTableau = () => {
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
export default FResponseTableau; 