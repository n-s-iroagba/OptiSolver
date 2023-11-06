import React, { useContext, useEffect } from 'react'
import createFRatios from '../../../utils/initialize/createFRatios'
import { useState } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import { preventNewLine } from '../../../utils/preventNewLine'
import '../tableauComponents.css'
const FRatio = () => {
  const {dimensions,iTableau,setITableau} = useContext(MatrixContext)

    const [rows, setRows] = useState([])

   useEffect(()=>{
    createFRatios(dimensions,preventNewLine,setRows,iTableau,setITableau)
},[dimensions, iTableau,setITableau])
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
export default FRatio;