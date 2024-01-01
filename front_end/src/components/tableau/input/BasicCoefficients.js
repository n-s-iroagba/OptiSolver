import React, { useContext, useEffect } from 'react'
import {useState } from 'react'
import { createSingleColumn } from '../../../utils/initialize/createBasicCoefficients'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import '../tableau.css'
import Empty from './Empty'

const BasicCoefficients = () => {

  const [rows, setRows] = useState([])
const {tableau,setTableau} = useContext(MatrixContext)
const dimensions = {
    numberOfRows:2
}

  useEffect(()=>{
  let variable= tableau.BasicCoefficients
  createSingleColumn(dimensions.numberOfRows,setRows,tableau,setTableau,variable)
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
export default BasicCoefficients;