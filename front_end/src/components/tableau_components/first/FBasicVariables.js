import React, { useContext, useEffect } from 'react'
import '../tableau.css'
import { useState } from 'react'
import { MatrixContext } from '../../../context/SimplexContext'
import { createSingleColumn } from '../../../utils/createTableauHelper'
import Empty from './Empty'

const BasicVariables = (props) => {

  const [rows, setRows] = useState([])
  const {tableau, setTableau } = useContext(MatrixContext)
  const dimensions = {
    numberOfRows:2
}

const inputTableau = solution[0]
  useEffect(()=>{
  let variable= 'basicVariables'
  createfirstTableauSingleColumn(numberOfRows, setRows, inputTableau, variable)
},[])
return <>
    <div className='center-tableau-wrapper'>
     <Empty text='Ci' position='inverse-bottom'/>
      <table className='single-column' >
        <thead>
          <tr>
            <th>Basis</th>
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
      <Empty text = 'C-row' />
    </div>
  </>
}
export default BasicVariables;