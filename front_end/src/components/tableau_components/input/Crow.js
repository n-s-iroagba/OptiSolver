import React, { useContext, useEffect } from 'react'
import {useState } from 'react'
import { createSingleColumn } from '../../../utils/createTableauHelper'
import { MatrixContext } from '../../../context/SimplexContext'
import '../tableau.css'


const Crow = () => {

  const [rows, setRows] = useState([])
const { dimensions,setITableau,iTableau} = useContext(MatrixContext)

  useEffect(()=>{
  let variable= 'crow'
  createSingleColumn(dimensions.numberOfColumns,setRows,iTableau,setITableau,variable)

},[])
return (
    <>
    <table  className='crow'>
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