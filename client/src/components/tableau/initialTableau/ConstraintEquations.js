

import { useState, useEffect } from 'react';
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext';
import { useContext } from 'react';
import '../tableauComponents.css'
import InitialObjectiveCoefficient from './InitialObjectiveCoefficient';
import { preventNewLine } from '../../../utils/preventNewLine';
import createConstraintEquations from '../../../utils/initialize/createConstraintEquations';
function ConstraintEquations() {
  const { dimensions,  tableau,setTableau,header, setHeader} = useContext(MatrixContext)
 
  const [rows, setRows] = useState([])
  const [crow, setCrow] = useState([]) 
  useEffect(()=>{
  createConstraintEquations(setHeader, preventNewLine, dimensions, setRows, setCrow, tableau, setTableau)
  },[])
  return (<>

    <div className='ce-wrapper'>
      <InitialObjectiveCoefficient />
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
              return (<td className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} contentEditable key={index}></td>)
            })
          }
          
        </tbody>

      </table >
    </div></>)
}


export default ConstraintEquations;
