import React from 'react'
import '../tableau.css'
import Empty from '../Empty'

const HistoryBasicVariables = (props) => {
 
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
            props.basicVariables.map((value, index) => {
              return (<tr key={index}><td>X<sub>{value}</sub></td></tr>)
            })
          }
        </tbody>
      </table>
      <Empty text = 'C-row' />
    </div>
  </>
}
export default HistoryBasicVariables;