import React, { useContext, useEffect } from 'react'
import '../tableauComponents.css'
import { useState } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import createBasicVariables from '../../../utils/initialize/createBasicVariables'
import { preventNewLine } from '../../../utils/preventNewLine'




const BasicVariables = () => {

  const [rows, setRows] = useState([])
  const { dimensions, tableau, setTableau } = useContext(MatrixContext)
  useEffect(() => {
    createBasicVariables(dimensions, setRows, preventNewLine, tableau, setTableau)
  },[])
  return <>
    <div className='b-wrapper'>
      <table style={{ heigth: '1.2cm', borderLeft: '3px solid grey' }}>
        <tr>
          <th >Ci</th>
        </tr>
      </table>
      <table className='basis'>
        <thead>
          <tr>

            <th><td>Basis</td></th>

          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, index) => {
              return (<tr className='small-font' key={index}>{row}</tr>)
            })
          }

          {
            <tr ><td style={{ height: '1.5cm', borderTop: '2px solid grey', fontSize: 'small' }}><b></b></td></tr>
          }
        </tbody>
      </table>
    </div>
  </>
}
export default BasicVariables;