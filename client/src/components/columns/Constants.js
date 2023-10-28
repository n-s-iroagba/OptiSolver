import React, { useEffect,useState } from 'react'
import useCreateConstant from '../../hook/useCreateConstant'
import { useContext } from 'react'
import { MatrixContext } from '../../context/ContextApi'
import { preventNewLine } from '../../utils/preventNewLine'
import './Matrix.css'

const Constants = ()=>{
    const {dimensions,tableau,setTableau,setConstraintEquations,constraintEquations} = useContext(MatrixContext)

    const [rows, setRows] = useState([])
    const [header, setHeader] = useState([])
    let temp = []
    let tempRows= []
   
    useCreateConstant(dimensions,preventNewLine,temp,tempRows,setRows,setHeader,tableau,setTableau)
    return <>
    <div className='c-wrapper'>
    <div style={{height:'1.2cm',borderLeft:'3px solid grey'}}></div>
        <table className='constants'>
            <thead>
                <tr>{
                    header.map((variable, index) => {
                        return (<th style={{paddingLeft:'0.1cm'}} key={index}>{variable}</th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, index) => {
                        return (<tr key={index}>{row}</tr>)
                    })
                }
                 <tr className='f-box' ><td style={{height:'1.5cm',borderTop:'2px solid grey',textAlign:'start'}}>F = <span contentEditable>_</span></td></tr>
            </tbody>
        </table>
        </div>

    </>

}
export default Constants;