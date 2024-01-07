import React, { useContext, useEffect } from 'react'
import '../tableau.css'
import { useState } from 'react'
import { MatrixContext } from '../../../context/SimplexContext'
import { createSingleColumn } from '../../../utils/createTableauHelper'
import Empty from '../Empty'

const Ratio = React.memo((props) => {

  const [rows, setRows] = useState([])
  const {iTableau, setITableau } = useContext(MatrixContext)
  const dimensions = {
    numberOfRows:2
}

  useEffect(()=>{
  let variable= 'ratio'
  createSingleColumn(dimensions.numberOfRows,setRows,iTableau,setITableau,variable)
},[])
  return <>
    <div className='right-tableau-wrapper'>
     <Empty position='inverse-bottom' type={"right"}/>
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
})
export default Ratio;