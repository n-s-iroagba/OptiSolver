import React, { useContext, useEffect } from 'react'
import './Matrix.css'
import {useState } from 'react'
import { MatrixContext } from '../../context/ContextApi'

import createBasicCoefficients from '../../hook/createBasicCoefficients'
import { preventNewLine } from '../../utils/preventNewLine'



const BasicCoefficients = () => {

  const [rows, setRows] = useState([])
  const [header, setHeader] = useState([])
 

const { dimensions,tableau,setTableau} = useContext(MatrixContext)

  useEffect(()=>{
  createBasicCoefficients(dimensions,setRows,setHeader,tableau,setTableau,preventNewLine)
},[])

  return <>
    <div className='bc-wrapper' style={{ width: '1cm' }}>
      <div style={{height:'1.2cm'}}></div>
      <table className='bc'>
        <thead>
          <tr>{
            header.map((variable, index) => {
              return (<th key={index}>{variable}</th>)
            })}
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