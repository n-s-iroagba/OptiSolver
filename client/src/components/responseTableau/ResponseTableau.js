import React, { useContext, useEffect } from 'react'
import RBasicVariables from '../rColumns/RBasicVariables';
import IBasicCoefficients from '../iColumns/IBasicCoefficients';
import RConstraintEquations from '../rColumns/RConstraintEquations';


import IConstants from '../columns/IConstants';

import '../TerminalTableau/TerminalTableau.css'
import Ratio from '../columns/Ratio';

const ResponseTableau = () => {

 

    return <>
  
  
        <div className='ttableau-wrapper' >
            <div><IBasicCoefficients/></div>
            <RBasicVariables/>
            <div><RConstraintEquations/></div>
            
            <div><IConstants/></div>
            <div><Ratio/></div>
            
       
        </div>
        
        
    </>
}
export default ResponseTableau;