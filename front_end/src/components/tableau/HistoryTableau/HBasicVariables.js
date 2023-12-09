import React from 'react'
import '../tableauComponents.css'





const IBasicVariables = ({rows}) => {


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
              return (<tr className='small-font' key={index}><td>{row}</td></tr>)
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