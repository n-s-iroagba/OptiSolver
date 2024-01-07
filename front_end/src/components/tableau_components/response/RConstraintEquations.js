

import { MatrixContext } from '../../../context/SimplexContext'
import React , { useContext, useEffect } from 'react';
import '../tableau.css'
import HistoryObjectiveCoefficient from '../history/HistoryObjectiveCoefficient';

const RConstraintEquations=React.memo(()=>{
  const {header,rTableau} = useContext(MatrixContext)
 
 
  
  return (<>

    <div className='ce-wrapper'>
    <HistoryObjectiveCoefficient />
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
})


export default RConstraintEquations;
