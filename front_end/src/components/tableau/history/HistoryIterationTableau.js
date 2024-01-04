import React from "react";
import HistoryBasicCoefficients from "./history/HistoryBasicCoefficients";
i
import HistoryBasicVariables from "./history/HistoryBasicVariables";
import HistoryConstraintEquations from "./history/HistoryConstraintEquations";
import HistoryConstants from "./history/HistoryConstants";
import '../Tableau.css'
import HistoryRatio from "../../tableau_components/history/HistoryRatio";

const HistoryIterationTableau = () => {
    return (
        <div className='tableau'>
            <HistoryBasicCoefficients/>
            <HistoryBasicVariables/>
            <HistoryConstraintEquations/>
            <HistoryConstants/>
            <HistoryRatio/>
       
        </div>
    )
}
export default HistoryIterationTableau; 