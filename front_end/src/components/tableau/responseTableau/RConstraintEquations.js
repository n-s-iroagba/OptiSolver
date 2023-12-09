
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext';
import { useContext, useEffect } from 'react';
import '../tableauComponents.css'
import { useState } from 'react';
import ObjectiveCoefficient from '../ObjectiveCoefficient';

const RConstraintEquations=()=>{
  const {header,rTableau} = useContext(MatrixContext)
 
  
  useEffect(()=>{

  },[])
  
  return (<>

    <div className='ce-wrapper'>
    <ObjectiveCoefficient />
      <table className='ce'>
      <tr >{
            header.map((variable, index) => {
              return (<th key={index}>{variable}</th>)
            })}
          </tr>
        <tbody >
          {
             rTableau.constraintEquations.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
          
          {
            rTableau.cRow.map((coefficient, index) => {
              return (<th className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} key={index}>{coefficient}</th>)
            })
          }
          
          
        </tbody>

      </table >
    </div></>)
}


export default RConstraintEquations;
