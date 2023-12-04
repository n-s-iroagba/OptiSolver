import React, { useContext,useEffect } from 'react'
import '../tableauComponents.css'
import {useState } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import createIBasicCoefficients from '../../../utils/iteration/createIBasicCoefficients'
import { preventNewLine } from '../../../utils/preventNewLine'



const IBasicCoefficients = () => {

  const [rows, setRows] = useState([])
 
  const {iTableau,setITableau} = useContext(MatrixContext)
  const dimensions = JSON.parse(localStorage.getItem('localDimensions'))
  useEffect (()=>{

  createIBasicCoefficients(dimensions,setRows,iTableau,setITableau,preventNewLine)
  },[])
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
              return (<tr key={index}>{row}</tr>)
            })
          }
          
          <tr className='last-row' ><td style={{height:'1.5cm',borderTop:'2px solid grey'}}></td></tr>
        </tbody>
      </table>
    </div>
  </>
}
export default IBasicCoefficients;