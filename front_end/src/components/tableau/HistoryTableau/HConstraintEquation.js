import React from 'react'
import '../tableauComponents.css'

function HConstraintEquations({objective,equations,crow}) {
 
  
  return (<>

    <div className='ce-wrapper'>
      <HObjectiveCoefficient objective={objective} />
      <table className='ce'>
        <thead >
          <tr >{
            equations.map((variable, index) => {
              return (<th key={index}>X<sub>{index+1}</sub></th>)
            })}
          </tr>
        </thead>
        <tbody >
          {
            equations.map((row, index) => {
              return (<tr key={index}>{row.map((variable,index)=>{
    
                return<td key={index}>{variable}</td>
              })}</tr>)
            })
          }
          
       
          {
            crow.map((coefficient, index) => {
              return (<td className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} key={index}>{coefficient}</td>)
            })
          }
          
        </tbody>

      </table >
    </div></>)
}


export default HConstraintEquations;
