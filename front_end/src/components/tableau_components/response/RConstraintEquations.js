

import { MatrixContext } from '../../../context/SimplexContext'
import React , { useContext, useEffect } from 'react';
import '../tableau.css'
import HistoryObjectiveCoefficient from '../history/HistoryObjectiveCoefficient';
import RFValue from './RFValue';

const RConstraintEquations=React.memo(()=>{
  const {header,responseTableau} = useContext(MatrixContext)
 
 
  
  return (<> 

    <div  className='center-tableau-wrapper'>
    <HistoryObjectiveCoefficient />
      <table className='single-column'>
      <tr >{
            header.map((variable, index) => {
              return (<th style={{ height: '1.6cm' }}  key={index}>{variable}</th>)
            })}
          </tr>
        <tbody >
          {
             responseTableau.constraintEquations.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
          
          {
            responseTableau.crow.map((coefficient, index) => {
              return (<th className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} key={index}>{coefficient}</th>)
            })
          }
          
          
        </tbody>

      </table >
      <RFValue/>
    </div></>)
})


export default RConstraintEquations;
