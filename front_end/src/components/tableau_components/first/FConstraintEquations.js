

import { useState, useEffect } from 'react';
import { MatrixContext } from '../../../context/SimplexContext';
import { useContext } from 'react';
import '../tableau.css'
import InitialObjectiveCoefficient from './InitialObjectiveCoefficient';
import { createMultipleColumn } from '../../../utils/createTableauHelper';



const dimensions = {
  numberOfRows: 2,
  numberOfColumns: 2
}
const ConstraintEquations = (props) => {
  let { responseTableau, header } = useContext(MatrixContext)
  
  return (<>

    <div className='center-tableau-wrapper'>
      <InitialObjectiveCoefficient />
      <table className='single-column'>
        <thead >
          <tr >{
            header.map((variable, index) => {
              return (<th key={index}>{index}</th>)
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
        
        responseTableau.cRrow.map((cell, index) => (
            <th contentEditable key={index}>
              {cell}
            </th>))

      }</tr>

    </div>
    </>
    )
}


export default ConstraintEquations;
