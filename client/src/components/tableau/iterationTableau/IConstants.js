import React, {useEffect, useState } from 'react'
import createIConstant from '../../../utils/iteration/createIConstant'
import { useContext } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import { preventNewLine } from '../../../utils/preventNewLine'
import '../tableauComponents.css'

const IConstants = () => {
    const { dimensions, setITableau, iTableau } = useContext(MatrixContext)
    const [rows, setRows] = useState([])
    const [iFValue,setIFValue] = useState(null)
useEffect(()=>{
    createIConstant(dimensions, preventNewLine,  setRows,  iTableau, setITableau,setIFValue)
},[dimensions,iTableau,setITableau])
    return <>
        <div className='ic-wrapper'>
            <div style={{ height: '1.2cm', borderLeft: '3px solid grey' }}></div>
            <table className='iconstants'>
                <thead>
                    <tr><th><td>Constants</td></th>     
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, index) => {
                            return (<tr key={index}>{row}</tr>)
                        })
                    }
                    <tr className='f-box' >{iFValue}</tr>
                </tbody>
            </table>
        </div>

    </>

}
export default IConstants;