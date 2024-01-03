import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../../context/SimplexContext'
import { createSingleColumn } from '../../../utils/createTableauHelper'
const ObjectiveCoefficients = ()=>{
    
    const [columns,setColumns] = useState([])
    const{tableau,setTableau,dimensions} = useContext(MatrixContext)
    const variable= 'objectiveCoefficients'
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
export default ObjectiveCoefficients;