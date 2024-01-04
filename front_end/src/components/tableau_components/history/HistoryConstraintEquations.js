

import React from 'react';
import { MatrixContext } from '../../../context/SimplexContext';
import { useContext } from 'react';
import '../tableau.css'
import HistoryObjectiveCoefficient from './HistoryObjectiveCoefficient';




const dimensions = {
  numberOfRows: 2,
  numberOfColumns: 2
}
const ConstraintEquations = (props) => {
  let { tableau, header,responseTableau } = useContext(MatrixContext)
  
  return (<>

    <div className='center-tableau-wrapper'>
      <HistoryObjectiveCoefficient />
      <table className='single-column'>
        <thead >
          <tr >{
            header.map((variable, index) => {
              return (<th key={index}>{variable}</th>)
            })}
          </tr>
        </thead>
        <tbody className='tableau-body' >
          {
            responseTableau.constraintEquations.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
        </tbody>
      </table >
      <tr className='c-row'>{
        
        tableau.crow.map((cell, index) => (
            <th contentEditable key={index}>
              {cell}
            </th>))

      }</tr>

    </div>
    </>
    )
}


export default ConstraintEquations;
