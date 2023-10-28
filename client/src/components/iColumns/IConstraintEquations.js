

import { useState, useEffect } from 'react';
import { MatrixContext } from '../../context/ContextApi';
import { useContext } from 'react';
import './Matrix.css'
import ObjectiveCoefficient from './ObjectiveCoefficient';
import { preventNewLine } from '../../utils/preventNewLine';
import createIConstraintEquations from '../../utils/iteration/createIConstraintEquations';
function IConstraintEquations() {
  const { dimensions,iTableau,setITableau,header} = useContext(MatrixContext)
 
  const [rows, setRows] = useState([])
  const [crow, setCrow] = useState([])
 
  useEffect(()=>{
  createIConstraintEquations(preventNewLine, dimensions, setRows,setCrow, iTableau,setITableau)
},[])
  return (<>

    <div className='ce-wrapper'>
      <ObjectiveCoefficient />
      <table className='ce'>
        <thead >
          <tr >{
            header.map((number, index) => {
              return (<th key={index}><td>X<sub>{number}</sub></td></th>)
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
              return (<td className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} contentEditable key={index}>{coefficient}</td>)
            })
          }
          
        </tbody>

      </table >
    </div></>)
}


export default IConstraintEquations;
