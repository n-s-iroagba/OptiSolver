import React, { useContext, useEffect } from 'react'
import {useState } from 'react'
import { createSingleColumn } from '../../../utils/initialize/createBasicCoefficients'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import '../tableau.css'
import Empty from './Empty'

const FBasicCoefficients = () => {

  const [rows, setRows] = useState([])
const {tableau,setTableau} = useContext(MatrixContext)
const dimensions = {
    numberOfRows:2
}
const inputTableau = solution[0]
  useEffect(()=>{
  let variable= tableau.BasicCoefficients
  createfirstTableauSingleColumn(numberOfRows, setRows, inputTableau, variable)
},[])

  return <>
    <div className='right-tableau-wrapper'>
    <Empty position='bottom'/>
      <table className='single-column'>
        <thead>
          <tr>
            <th>C<sub>B</sub></th>
          </tr>
        </thead>
        <tbody className='tableau-body'>
          {
            rows.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          } 
        </tbody>
      </table>
      <Empty/>
    </div>
  </>
}
export default FBasicCoefficients;