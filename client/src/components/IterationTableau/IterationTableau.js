import React, { useContext, useEffect } from 'react'
import IBasicVariables from '../iColumns/IBasicVariables';
import IBasicCoefficients from '../iColumns/IBasicCoefficients';
import IConstraintEquations from '../iColumns/IConstraintEquations';


import IConstants from '../columns/IConstants';

import '../TerminalTableau/TerminalTableau.css'
import Ratio from '../columns/Ratio';

const IterationTableau = () => {

 

    return <>
  
  
        <div className='ttableau-wrapper' >
            <div><IBasicCoefficients/></div>
            <IBasicVariables/>
            <div><IConstraintEquations/></div>
            
            <div><IConstants/></div>
            <div><Ratio/></div>
            
       
        </div>
        
        
    </>
}
export default IterationTableau;