import React, { useContext } from 'react'
import '../tableau.css'
import { MatrixContext } from '../../../context/SimplexContext'
import    Empty from '../Empty'

const RBasicCoefficients = () => {
  const {responseTableau} = useContext(MatrixContext)
  return <>
    <div className='left-tableau-wrapper'>
    <Empty position='bottom'/>
      <table className='single-column'>
        <thead>
          <tr>
            <th>C<sub>B</sub></th>
          </tr>
        </thead>
        <tbody className='tableau-body'>
          {
            responseTableau.basicCoefficients.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          } 
        </tbody>
      </table>
      <Empty/>
    </div>
  </>
}
export default RBasicCoefficients;