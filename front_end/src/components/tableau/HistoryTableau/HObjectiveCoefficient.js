import React from 'react'
import '../tableauComponents.css'


const HObjectiveCoefficient = ({objective})=>{
    
    
    return<>
   
    <table style={{heigth:'1.2cm',borderLeft:'3px solid grey'}}>
     <tr>
        {objective.map((coefficient,index)=>{
            return(<th key={index}>{coefficient}</th>)

        })}
     </tr>
    </table>
   
   
    </>
}
export default HObjectiveCoefficient;