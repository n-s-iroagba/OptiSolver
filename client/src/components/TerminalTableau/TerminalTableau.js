import React, { useContext, useEffect } from 'react'
import BasicVariables from '../columns/BasicVariables';
import BasicCoefficients from '../columns/BasicCoefficients';
import ConstraintEquations from '../columns/ConstraintEquations';


import { useState } from 'react';
import useSetCellSize from '../../hook/useSetCellSize';
import { MatrixContext } from '../../context/ContextApi';

import Constants from '../columns/Constants';

import './TerminalTableau.css'

const TerminalTableau = () => {

    return <>
  
  
        <div className='ttableau-wrapper' >
            <div><BasicCoefficients/></div>
            <BasicVariables/>
            <div><ConstraintEquations/></div>
            
            <div><Constants/></div>
            
       
        </div>
        
        
    </>
}
export default TerminalTableau;