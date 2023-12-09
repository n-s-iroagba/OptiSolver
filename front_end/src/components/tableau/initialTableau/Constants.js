import React, { useEffect,useState } from 'react'
import createConstant from '../../../utils/initialize/createConstant'
import { useContext } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import { preventNewLine } from '../../../utils/preventNewLine'
import '../tableauComponents.css'

const Constants = ()=>{
    const {tableau,setTableau} = useContext(MatrixContext)
    const dimensions = JSON.parse(localStorage.getItem('localDimensions'))

    const [rows, setRows] = useState([])
    const [fValue,setFValue] = useState(null)
    useEffect(()=>{
    createConstant(dimensions,preventNewLine,setRows,tableau,setTableau,setFValue)
},[])
    return <>
    <div className='c-wrapper'>
    <div style={{height:'1.2cm',borderLeft:'3px solid grey'}}></div>
        <table className='constants'>
            <thead>
                <tr>
                    <th style={{paddingLeft:'0.1cm'}}><td>Constants</td></th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, index) => {
                        return (<tr key={index}>{row}</tr>)
                    })
                }
                 <tr className='f-box' >{fValue}</tr>
            </tbody>
        </table>
        </div>
    </>

}
export default Constants;