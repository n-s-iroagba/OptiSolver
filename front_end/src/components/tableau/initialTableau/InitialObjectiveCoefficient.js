import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import '../tableauComponents.css'
import createObjectiveCoefficient from '../../../utils/initialize/createObjectiveCoefficients'

const InitialObjectiveCoefficient = ()=>{
    
    const [row, setRow] = useState([])
    const{tableau,setTableau,preventNewLine} = useContext(MatrixContext)
    const dimensions = JSON.parse(localStorage.getItem('localDimensions'))
    useEffect(()=>{
    createObjectiveCoefficient(dimensions,tableau,setTableau,setRow,preventNewLine) 
    },[])
    return<>
   
    <table style={{heigth:'1.2cm',borderLeft:'3px solid grey'}}>
     <tr>
        {row.map((coefficient,index)=>{
            return(<th key={index}>{coefficient}</th>)

        })}
     </tr>
    </table>
   
   
    </>
}
export default InitialObjectiveCoefficient;