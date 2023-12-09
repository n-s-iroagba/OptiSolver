

import { useState, useEffect } from 'react';
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext';
import { useContext } from 'react';
import '../tableauComponents.css'
import ObjectiveCoefficient from '../ObjectiveCoefficient';
import { preventNewLine } from '../../../utils/preventNewLine';
import createIConstraintEquations from '../../../utils/iteration/createIConstraintEquations'
function IConstraintEquations() {
  const { iTableau,setITableau,header} = useContext(MatrixContext)
  const dimensions = JSON.parse(localStorage.getItem('localDimensions'))

 
  const [rows, setRows] = useState([])
  const [crow, setrow] = useState([])
 
  useEffect(()=>{
  createIConstraintEquations(preventNewLine, dimensions, setRows, setrow, iTableau,setITableau)

},[])
  return (<>
    <div className='ce-wrapper'>
      <ObjectiveCoefficient />
      <table className='ce'>
        <thead >
          <tr >{
            header.map((variable, index) => {
              return (<th key={index}>{variable}</th>)
            })}
          </tr>
        </thead>
        <tbody >
          {
            rows.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
          
       
          {
            crow.map((coefficient, index) => {
              return (<th className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} key={index}>{coefficient}</th>)
            })
          }
          
        </tbody>

      </table >
    </div></>)
}


export default IConstraintEquations;
