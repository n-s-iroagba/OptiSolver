import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../../context/SimplexContext'
import { createSingleColumn } from '../../../utils/createTableauHelper'
const InitialObjectiveCoefficient = ()=>{
    
    const [columns,setColumns] = useState([])
    const{tableau,setTableau,dimensions} = useContext(MatrixContext)
    const variable= 'objectiveCoefficient'
    useEffect(()=>{
        createSingleColumn(dimensions.numberOfColumns, setColumns, tableau, setTableau, variable) 
    },[])
    return<>
   
    <table >
     <tr className='objective-coefficient'>
        {columns.map((column,index)=>{
            return(<th key={index}>{column}</th>)

        })}
     </tr>
    </table>
   
   
    </>
}
export default InitialObjectiveCoefficient;