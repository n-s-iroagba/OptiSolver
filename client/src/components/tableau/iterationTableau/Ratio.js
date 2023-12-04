import React, { useContext, useEffect } from 'react'
import createRatios from '../../../utils/iteration/createRatios'
import { useState } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import { preventNewLine } from '../../../utils/preventNewLine'
import '../tableauComponents.css'
const Ratio = () => {
  const {iTableau,setITableau} = useContext(MatrixContext)
  const dimensions = JSON.parse(localStorage.getItem('localDimensions'))

    const [rows, setRows] = useState([])

   useEffect(()=>{
    createRatios(dimensions,preventNewLine,setRows,iTableau,setITableau)
},[] )
    return <>
     <div style={{width:'1.3cm'}}className='c-wrapper'>
     <div style={{height:'1.2cm'}}></div>
        <table className='r'>
            <thead>
                <tr>
                        <th><td>Ratio</td></th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, index) => {
                        return (<tr key={index}>{row}</tr>)
                    })
                }
                
                <tr className='ratio-last-row' ><td style={{height:'1.5cm',borderTop:'2px solid grey'}}></td></tr>
            </tbody>
        </table>
        </div>
    </>
}
export default Ratio;