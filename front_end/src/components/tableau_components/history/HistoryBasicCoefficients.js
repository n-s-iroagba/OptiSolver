import React from 'react'
import '../tableau.css'
import Empty from './Empty'

const HistoryBasicCoefficients = (props) => {
  return <>
    <div className='right-tableau-wrapper'>
    <Empty position='bottom'/>
      <table className='single-column'>
        <thead>
          <tr>
            <th>C<sub>B</sub></th>
          </tr>
        </thead>
        <tbody className='tableau-body'>
          {
            props.basicCoefficient.map((row, index) => {
              return (<tr key={index}><td>{row}</td></tr>)
            })
          } 
        </tbody>
      </table>
      <Empty/>
    </div>
  </>
}
export default HistoryBasicCoefficients;