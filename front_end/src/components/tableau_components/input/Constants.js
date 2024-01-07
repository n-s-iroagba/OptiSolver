import React, { useContext, useEffect } from 'react'
import '../tableau.css'
import { useState } from 'react'
import { createSingleColumn } from '../../../utils/createTableauHelper'
import { MatrixContext } from '../../../context/SimplexContext'
import Empty from '../Empty'

const Constants = React.memo((props) => {

  const [rows, setRows] = useState([])
  const { dimensions } = useContext(MatrixContext)

let className = ''
let emptyName = ''
if(props.rightEnd){
   className = 'right-tableau-wrapper'
   emptyName= 'right'
}
else{
  className = 'center-tableau-wrapper'
}

  useEffect(()=>{
    const variable= 'constants'
    createSingleColumn(dimensions.numberOfRows,setRows,props.tableau,props.setTableau,variable)
  },[])
  return <>
    <div className={className}>
     <Empty  type ={emptyName} constant = {true} position='inverse-bottom'/>
      <table className='constants' >
        <thead>
          <tr>
            <th>Constants</th>
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
export default Constants;