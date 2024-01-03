import React from 'react'

import '../tableau.css'
import Empty from './Empty'

const HistoryRatio = (props) => {

  return <>
    <div className='right-tableau-wrapper'>
    <Empty position='bottom'/>
      <table className='single-column'>
        <thead>
          <tr>
            <th>Ratio</th>
          </tr>
        </thead>
        <tbody className='tableau-body'>
          {
            props.ratio.map((row, index) => {
              return (<tr key={index}><td>{row}</td></tr>)
            })
          } 
        </tbody>
      </table>
      <Empty/>
    </div>
  </>
}
export default HistoryRatio;