import React from "react";
import HistoryBasicCoefficients from "./history/HistoryBasicCoefficients";
import Ratio from "../../tableau_components/input/Ratio";
import HistoryBasicVariables from "./history/HistoryBasicVariables";
import HistoryConstraintEquations from "./history/HistoryConstraintEquations";
import HistoryConstants from "./history/HistoryConstants";
import '../Tableau.css'

const FirstIteration = () => {
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
export default FirstIteration; 