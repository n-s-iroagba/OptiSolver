import React, { useContext, useEffect } from 'react'
import '../tableau.css'
import { useState } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import { createSingleColumn } from '../../../utils/initialize/createBasicCoefficients'
import Empty from './Empty'

const Ratio = (props) => {

  const [rows, setRows] = useState([])
  const {iTableau, setITableau } = useContext(MatrixContext)
  const dimensions = {
    numberOfRows:2
}

  useEffect(()=>{
  let variable= iTableau.ratio
  createSingleColumn(dimensions.numberOfRows,setRows,iTableau,setITableau,variable)
},[])
  return <>
    <div className='right-tableau-wrapper'>
     <Empty position='inverse-bottom'/>
      <table className='single-column' >
        <thead>
          <tr>
            <th>Ratio</th>
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
export default Ratio;