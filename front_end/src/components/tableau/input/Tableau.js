import React from 'react'
import BasicVariables from '../../tableau_components/input/BasicVariables';
import BasicCoefficients from '../../tableau_components/input/BasicCoefficients';
import ConstraintEquations from '../../tableau_components/input/ConstraintEquations';
import Constants from '../../tableau_components/input/Constants';
import { useContext } from 'react';
import { MatrixContext } from '../../../context/SimplexContext';
import '../Tableau.css'
import ObjectiveCoefficients from '../../tableau_components/input/ObjectiveCoefficient';

const Tableau = () => {
    const { tableau, setTableau } = useContext(MatrixContext)
    return <>
        <div className='tableau'>
            <BasicCoefficients setTableau={setTableau} tableau={tableau} />
            <BasicVariables setTableau={setTableau} tableau={tableau} />
            <ConstraintEquations setTableau={setTableau} tableau={tableau} objectiveCoefficients={ObjectiveCoefficients} />
            <Constants setTableau={setTableau} tableau={tableau} rightEnd={true} />
        </div>
    </>
}
export default Tableau;