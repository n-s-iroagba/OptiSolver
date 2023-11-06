import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../features/solve_simplex/context/SimplexContext'

import './tableauComponents.css'

const ObjectiveCoefficient = ()=>{
    const{tableau} = useContext(MatrixContext)
    return<>
   
    <table style={{height:'1.2cm',borderLeft:'3px solid grey'}}>
     <tr>
        {tableau.objectiveCoefficients.map((coefficient,index)=>{
        return(<th><td key={index}>{coefficient}</td></th>)

        })}
     </tr>
    </table>
   
   
    </>
}
export default ObjectiveCoefficient;