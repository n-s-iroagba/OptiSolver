import React, { useContext, useEffect } from 'react'
import {useState } from 'react'

import createBasicCoefficients from '../../../utils/initialize/createBasicCoefficients'
import { preventNewLine } from '../../../utils/preventNewLine'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import '../tableauComponents.css'
const BasicCoefficients = () => {

  const [rows, setRows] = useState([])
const { dimensions,tableau,setTableau} = useContext(MatrixContext)

  useEffect(()=>{
  createBasicCoefficients(dimensions,setRows,tableau,setTableau,preventNewLine)
},[dimensions,setTableau,tableau])

  return <>
    <div className='bc-wrapper' style={{ width: '1cm' }}>
      <div style={{height:'1.2cm'}}></div>
      <table className='bc'>
        <thead>
          <tr><th><td>C<sub>B</sub></td></th>
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
          
          <tr className='last-row' ><td style={{height:'1.5cm',borderTop:'2px solid grey'}}></td></tr>
        </tbody>
      </table>
    </div>
  </>
}
export default BasicCoefficients;