import React, { useContext, useEffect } from 'react'
import '../tableauComponents.css'
import { useState } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'

import createIBasicVariables from '../../../utils/iteration/createIBasicVariables'
import { preventNewLine } from '../../../utils/preventNewLine'




const IBasicVariables = () => {

  const [rows, setRows] = useState([])

  const { dimensions,  iTableau, setITableau} = useContext(MatrixContext)
  useEffect(() => {

    createIBasicVariables(dimensions, setRows, preventNewLine, iTableau, setITableau)
  }, [dimensions,iTableau,setITableau])
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
            <tr ><td style={{ height: '1.5cm', borderTop: '2px solid grey', fontSize: 'small' }}><b>C-Row</b></td></tr>
          }
        </tbody>
      </table>
    </div>
  </>
}
export default IBasicVariables;