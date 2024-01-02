import React, { useContext, useEffect } from 'react'
import '../tableau.css'
import { useState } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import {createfirstTableauSingleColumn} from '../../../utils/initialize/createBasicCoefficients'
import Empty from './Empty'

const FConstants = (props) => {

  const [rows, setRows] = useState([])
  const {tableau, setTableau } = useContext(MatrixContext)
  const dimensions = {
    numberOfRows:2
}

  useEffect(()=>{
  let variable= tableau.BasicCoefficients
  createfirstTableauSingleColumn(numberOfRows, setRows, inputTableau, variable)
},[])

  return <>
    <div className='center-tableau-wrapper'>
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
export default FConstants;