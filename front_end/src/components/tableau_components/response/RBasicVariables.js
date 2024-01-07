import React, { useContext } from 'react'
import '../tableau.css'
import { MatrixContext } from '../../../context/SimplexContext'
import Empty from '../Empty'

const RBasicVariables = () => {
 const {responseTableau} = useContext(MatrixContext)
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