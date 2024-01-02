import React, { useContext, useEffect } from 'react'
import '../tableau.css'
import { useState } from 'react'
import { MatrixContext } from '../../../context/SimplexContext'
import { createBasicVariables } from '../../../utils/createTableauHelper'
import Empty from './Empty'

const BasicVariables = (props) => {

  const [rows, setRows] = useState([])
  const { dimensions } = useContext(MatrixContext)
 


  useEffect(()=>{
  
   createBasicVariables(dimensions,setRows,props.tableau,props.setTableau)
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
      <Empty text = {props.text||''} />
    </div>
  </>
}
export default BasicVariables;