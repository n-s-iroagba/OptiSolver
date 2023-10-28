import React, { useState } from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../context/ContextApi'
import { useCreateObjectiveCoefficient } from '../../hook/useCreateObjectiveCoefficients'
import './Matrix.css'

const ObjectiveCoefficient = ()=>{
    let temp_row = [];
    const [row, setRow] = useState([])
    const{tableau,setTableau,preventNewLine,dimensions} = useContext(MatrixContext)
    useCreateObjectiveCoefficient(dimensions,tableau,setTableau,temp_row,setRow,preventNewLine) 
    
    return<>
   
    <table style={{heigth:'1.2cm',borderLeft:'3px solid grey'}}>
     <tr>
        {row.map((coefficient,index)=>{
            return(<th contentEditable key={index}>{coefficient}</th>)

        })}
     </tr>
    </table>
   
   
    </>
}
export default ObjectiveCoefficient;