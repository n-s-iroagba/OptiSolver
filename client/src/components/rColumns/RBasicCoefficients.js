import React, { useContext,useEffect } from 'react'
import './Matrix.css'
import { MatrixContext } from '../../context/ContextApi'




const RBasicCoefficients = () => {

  
 
  const {rTableau,} = useContext(MatrixContext)
  

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
            rTableau.crow.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
          
          <tr className='last-row' ><td style={{height:'1.5cm',borderTop:'2px solid grey'}}></td></tr>
        </tbody>
      </table>
    </div>
  </>
}
export default RBasicCoefficients;