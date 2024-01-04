import React, { useContext, useEffect } from 'react'
import {useState } from 'react'
import { createSingleColumn } from '../../../utils/createTableauHelper'
import { MatrixContext } from '../../../context/SimplexContext'
import '../tableau.css'
import Empty from '../Empty'

const BasicCoefficients = (props) => {

  const [rows, setRows] = useState([])
const { dimensions } = useContext(MatrixContext)

  useEffect(()=>{
  let variable= 'basicCoefficients'
  createSingleColumn(dimensions.numberOfRows,setRows,props.tableau,props.setTableau,variable)
},[])

  return <>
    <div className='left-tableau-wrapper'>
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