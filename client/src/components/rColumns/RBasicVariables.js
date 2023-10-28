import React, { useContext, useEffect } from 'react'
import './Matrix.css'

import { MatrixContext } from '../../context/ContextApi'





const RBasicVariables = () => {



  const {rTableau}  = useContext(MatrixContext)

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
            rTableau.basicVariables.map((row, index) => {
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
export default RBasicVariables;