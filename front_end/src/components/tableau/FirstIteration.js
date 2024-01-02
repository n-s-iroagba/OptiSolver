import React from "react";
import FBasicCoefficients from "./first/FBasicCoefficients";
import Ratio from "../tableau_components/input/Ratio";
import FBasicVariables from "./first/FBasicVariables";
import FConstraintEquations from "./first/FConstraintEquations";
import FConstants from "./first/FConstants";


const FirstIteration = () => {
    return (
        <div>
            <FBasicCoefficients/>
            <FBasicVariables/>
            <FConstraintEquations/>
            <FConstants/>
            <Ratio/>
        </div>
    )
}
export default FirstIteration; 