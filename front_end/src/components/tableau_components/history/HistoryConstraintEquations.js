

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
  let { tableau, header} = useContext(MatrixContext)
  
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
  props.constraintEquations.map((rows, index) => {
    return (
      <tr key={index}>
        {rows.map((row, i) => {
          return <td key={i}>{row}</td>;
        })}
      </tr>
    );
  })
}
        </tbody>
      </table >
      <tr className='crow'>{
        
        props.crow.map((cell, index) => (
            <th key={index}>
             <td contentEditable>{cell}</td> 
            </th>))

      }</tr>

    </div>
    </>
    )
}


export default ConstraintEquations;
