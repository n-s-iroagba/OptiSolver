import React, { useContext, useEffect } from 'react'
import {useState } from 'react'
import { createSingleColumn } from '../../../utils/createTableauHelper'
import { MatrixContext } from '../../../context/SimplexContext'
import '../tableau.css'


const Crow = (props) => {

  const [rows, setRows] = useState([])
const { dimensions } = useContext(MatrixContext)

  useEffect(()=>{
  let variable= 'crow'
  createSingleColumn(dimensions.numberOfRows,setRows,props.tableau,props.setTableau,variable)
},[])
return (
    <>
    <table>
        <tbody>
          <tr>{
            rows.map((row, index) => {
              return (<th key={index}>{row}</th>)
            })
          }</tr>
        </tbody>
      </table>
    </>
) 
}
export default Crow;