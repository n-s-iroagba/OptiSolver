import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../../context/SimplexContext'

import '../tableau.css'

const HistoryObjectiveCoefficient = ()=>{
    const {tableau} = useContext(MatrixContext)
    alert(JSON.stringify(tableau))
    return<>
   
   <table >
     <tr className='objective-coefficient'>
        {tableau.objectiveCoefficients.map((coefficient,index)=>{
        return(<th><td key={index}>{coefficient}</td></th>)

        })}
     </tr>
    </table>
   
   
    </>
}
export default HistoryObjectiveCoefficient;