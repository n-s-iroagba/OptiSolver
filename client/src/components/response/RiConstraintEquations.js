

import { useState, useEffect } from 'react';
import { MatrixContext } from '../../context/ContextApi';
import { useContext } from 'react';
import '../columns/Matrix.css'
import ObjectiveCoefficient from './ObjectiveCoefficient';
import { preventNewLine } from '../../utils/preventNewLine';
import { checkConstraintEquations } from '../../utils/checkTableau';
import { createRiConstraint } from '../../utils/createRiConstraint';
function ConstraintEquations() {
  const { dimensions,headers,ITableau, setITableau} = useContext(MatrixContext)
  
  const [rows, setRows] = useState([])
  const [crow, setCrow] = useState([])
  useEffect(()=>{
    const loading = createRiConstraint(preventNewLine, dimensions, setRows, setCrow, ITableau, setITableau) 
  })
  
  return (<>

    <div className='ce-wrapper'>
      <ObjectiveCoefficient />
      <table className='ce'>
        <thead >
          <tr >{
            headers.map((variable, index) => {
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
              return (<td className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} contentEditable key={index}>{coefficient}</td>)
            })
          }
          
        </tbody>

      </table >
    </div></>)
}


export default ConstraintEquations;
