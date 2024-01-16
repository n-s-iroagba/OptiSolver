

import { MatrixContext } from '../../../context/SimplexContext'
import React , { useContext } from 'react';
import '../tableau.css'
import HObjectiveCoefficient from '../history/HObjectiveCoefficient';
import RCrow from './RCrow';

const RConstraintEquations=React.memo(()=>{
  const {header,responseTableau} = useContext(MatrixContext)  
  return (<> 
    <div  className='center-tableau-wrapper'>
    <HObjectiveCoefficient />
      <table className='single-column'>
      <tr >{
            header.map((variable, index) => {
              return (<th style={{ height: '1.6cm' }}  key={index}>{variable}</th>)
            })}
          </tr>
        <tbody className='tableau-body' >
          {
             responseTableau.constraintEquations.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
} 
        </tbody>
      </table >
     <RCrow/>
    </div></>)
})


export default RConstraintEquations;
