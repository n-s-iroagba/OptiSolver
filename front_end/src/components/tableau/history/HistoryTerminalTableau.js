import React from "react";
import HistoryBasicCoefficients from "./history/HistoryBasicCoefficients";
i
import HistoryBasicVariables from "./history/HistoryBasicVariables";
import HistoryConstraintEquations from "./history/HistoryConstraintEquations";
import HistoryConstants from "./history/HistoryConstants";
import '../Tableau.css'

const HistoryTerminalTableau = () => {
    return (
        <div>
            <HistoryBasicCoefficients/>
            <HistoryBasicVariables/>
            <HistoryConstraintEquations/>
            <HistoryConstants/>
       
        </div>
    )
}
export default HistoryTerminalTableau; 