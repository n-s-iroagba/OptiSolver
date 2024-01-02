import React, { useContext } from 'react'
import '../tableauComponents.css'
import { MatrixContext } from '../../../context/SimplexContext'

const RBasicVariables = () => {
 const {rTableau} = useContext(MatrixContext)
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
            responseTableau.basicVariables.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
        </tbody>
      </table>
      <Empty text = 'C-row' />
    </div>
  </>
}
export default RBasicVariables;