import React, { useContext } from 'react'
import useCreateRatios from '../../hook/useCreateRatios'
import { useState } from 'react'
import { MatrixContext } from '../../context/ContextApi'
import { preventNewLine } from '../../utils/preventNewLine'
import '../columns/Matrix.css'
const Ratio = () => {
  const {dimensions,tableau,setTableau} = useContext(MatrixContext)

    const [rows, setRows] = useState([])
    const [header, setHeader] = useState([])

    let temp = []
    let tempRows= []
   
    useCreateRatios(dimensions,preventNewLine,temp,tempRows,setRows,setHeader,tableau,setTableau)
    return <>
     <div style={{width:'1.3cm'}}className='c-wrapper'>
     <div style={{height:'1.2cm'}}></div>
        <table className='r'>
            <thead>
                <tr>{
                    header.map((variable, index) => {
                        return (<th  key={index}>{variable}</th>)
                    })}
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