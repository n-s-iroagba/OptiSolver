import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'

import createObjectiveCoefficient from '../../../utils/initialize/createObjectiveCoefficients'

const InitialObjectiveCoefficient = ()=>{
    
    const [row, setRow] = useState([])
    const{tableau,setTableau,preventNewLine} = useContext(MatrixContext)
    const dimensions ={
    
            numberOfRows:2,
            numberOfColumns:2
        
    }
    useEffect(()=>{
    createObjectiveCoefficient(dimensions,tableau,setTableau,setRow,preventNewLine) 
    },[])
    return<>
   
    <table >
     <tr className='objective-coefficient'>
        {row.map((coefficient,index)=>{
            return(<th key={index}>{index}</th>)

        })}
     </tr>
    </table>
   
   
    </>
}
export default InitialObjectiveCoefficient;