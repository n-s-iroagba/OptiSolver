import React, { useContext } from 'react'
import './Matrix.css'
import {useState } from 'react'
import { MatrixContext } from '../../context/ContextApi'

import useCreateBasicVariables from '../../hook/usecreateBasicVariables'
import { preventNewLine } from '../../utils/preventNewLine'




const BasicVariables = () => {

  const [rows, setRows] = useState([])
  const [header, setHeader] = useState([])
  let temp = []
  let temp_rows = []

  const { dimensions,tableau,setTableau} = useContext(MatrixContext)

  useCreateBasicVariables(dimensions, temp, temp_rows, setRows, setHeader,preventNewLine,tableau,setTableau)

  return <>
    <div className='b-wrapper'>
    <table style={{heigth:'1.2cm',borderLeft:'3px solid grey'}}>
     <tr>
      <th >Ci</th>
    </tr>
    </table>
      <table className='basis'>
        <thead>
          <tr>{
            header.map((variable, index) => {
              return (<th  key={index}>{variable}</th>)
            })}
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, index) => {
              return (<tr className='small-font' key={index}>{row}</tr>)
            })
          }
           
          {
          <tr ><td style={{height:'1.5cm',borderTop:'2px solid grey',fontSize:'small'}}><b>C-Row</b></td></tr>
}
        </tbody>
      </table>
    </div>
  </>
}
export default BasicVariables;