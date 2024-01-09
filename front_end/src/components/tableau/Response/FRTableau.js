import React from "react";
import HistoryBasicCoefficients from "../../tableau_components/history/HistoryBasicCoefficients";
import HistoryBasicVariables from "../../tableau_components/history/HistoryBasicVariables";
import HistoryConstraintEquations from "../../tableau_components/history/HistoryConstraintEquations";
import HistoryConstants from"../../tableau_components/history/HistoryConstants";
import '../Tableau.css'
import RRatio  from "../../tableau_components/response/RRatio"
import { useContext } from "react";
import { MatrixContext } from "../../../context/SimplexContext";

import '../Tableau.css'

const FResponseTableau = () => {
  
     
const {tableau} = useContext(MatrixContext)
    return (
        <div  className='tableau'>
            <HistoryBasicCoefficients basicCoefficients ={tableau.basicCoefficients}/>
            <HistoryBasicVariables basicVariables = {tableau.basicVariables}/>
            <HistoryConstraintEquations  crow = {'response'} constraintEquations ={tableau.constraintEquations}/>
            <HistoryConstants fValue={'response'} constants ={tableau.constants}/>
            <RRatio/>
        </div>
    )
}
export default FResponseTableau; 
