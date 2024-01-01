import React, { useContext, useEffect } from 'react'
import '../tableau.css'
import { useState } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import { createSingleColumn } from '../../../utils/initialize/createBasicCoefficients'
import Empty from './Empty'

const Constants = (props) => {

  const [rows, setRows] = useState([])
  const {tableau, setTableau } = useContext(MatrixContext)
  const dimensions = {
    numberOfRows:2
}

let className = ''
if(props.rightEnd)
  className = 'right-tableau-wrapper'
else
  className = 'center-tableau-wrapper'

  useEffect(()=>{
    let variable= tableau.constants
    createSingleColumn(dimensions.numberOfRows,setRows,tableau,setTableau,variable)
  })
  return <>
    <div className={className}>
     <Empty  constant = {true} position='inverse-bottom'/>
      <table className='constants' >
        <thead>
          <tr>
            <th>Constants</th>
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
export default Constants;