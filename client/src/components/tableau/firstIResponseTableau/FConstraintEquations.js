import React, { useEffect,useState } from 'react';
import '../tableauComponents.css'
import ObjectiveCoefficient from '../ObjectiveCoefficient';
import { cRowIPush } from '../../../utils/iteration/iPush';
import { useContext } from 'react';
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext';
import {preventNewLine} from '../../../utils/preventNewLine'
function FConstraintEquations() {
  const { tableau,header,dimensions} = useContext(MatrixContext)
  const [cRow, setCRow] = useState([])
  useEffect(()=>{
    let cRowMatrix = []
    let tempCrow=[]
    for (let j = 1; j <= dimensions.numberOfColumns; j++) {
      tempCrow.push(<td contentEditable onKeyDown={
        (e) => preventNewLine(e)} onInput={
          (e) => {
            cRowIPush(e)
          }}>0</td>)
      cRowMatrix.push(0)
    }
    setCRow(tempCrow);
  },[dimensions.numberOfColumns])

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
            tableau.constraintEquations.map((row, index) => {
              return (<tr key={index}>{row.map((column,j)=>{
                return<td key={j}>{column}</td>
              })}</tr>)
            })
          }
          
       
          {
            cRow.map((coefficient, index) => {
              return (<td className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} contentEditable key={index}>{coefficient}</td>)
            })
          }
          
        </tbody>

      </table >
    </div></>)
}


export default FConstraintEquations;
