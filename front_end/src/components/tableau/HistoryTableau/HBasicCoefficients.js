import React from 'react'
import '../tableauComponents.css'




const HBasicCoefficients = ({rows}) => {

  
  return <>
    <div className='bc-wrapper' style={{ width: '1cm' }}>
      <div style={{height:'1.2cm'}}></div>
      <table className='bc'>
        <thead>
          <tr>
              <th ><td>C<sub>B</sub></td></th>
          
          </tr>
        </thead>
        <tbody>
          {
            rows.map((row, index) => {
              return (<tr key={index}><td>{row}</td></tr>)
            })
          }
          
          <tr className='last-row' ><td style={{height:'1.5cm',borderTop:'2px solid grey'}}></td></tr>
        </tbody>
      </table>
    </div>
  </>
}
export default HBasicCoefficients;