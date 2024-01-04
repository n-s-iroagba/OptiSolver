import React from "react";
import HistoryBasicCoefficients from "../../tableau_components/history/HistoryBasicCoefficients";
import Ratio from "../../tableau_components/input/Ratio";
import HistoryBasicVariables from  "../../tableau_components/history/HistoryBasicVariables";
import HistoryConstraintEquations from  "../../tableau_components/history/HistoryConstraintEquations";
import HistoryConstants from  "../../tableau_components/history/HistoryConstants";
import '../Tableau.css'

const FirstIterationTableau = () => {
    return (
        <div>
            <HistoryBasicCoefficients/>
            <HistoryBasicVariables/>
            <HistoryConstraintEquations/>
            <HistoryConstants/>
            <Ratio/>
        </div>
    )
}
export default FirstIterationTableau; 