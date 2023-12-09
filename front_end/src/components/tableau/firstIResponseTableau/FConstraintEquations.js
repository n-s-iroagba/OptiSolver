import React, { useEffect,useState } from 'react';
import '../tableauComponents.css'
import ObjectiveCoefficient from '../ObjectiveCoefficient';
import { cRowIPush } from '../../../utils/iteration/iPush';
import { useContext } from 'react';
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext';
import {preventNewLine} from '../../../utils/preventNewLine'
function FConstraintEquations() {
  const { tableau,header,iTableau,setITableau} = useContext(MatrixContext)
  const dimensions = JSON.parse(localStorage.getItem('localDimensions'))
  const [cRow, setCRow] = useState([])
  useEffect(()=>{
    let cRowMatrix = []
    let tempCrow=[]
    for (let j = 0; j < dimensions.numberOfColumns; j++) {
      tempCrow.push(<td contentEditable onKeyDown={
        (e) => preventNewLine(e)} onInput={
          (e) => {
            cRowIPush(j,e,iTableau,setITableau)
          }}>0</td>)
      cRowMatrix.push(0)
    }
    console.log(tempCrow)
    setCRow(tempCrow);
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
            tableau.constraintEquations.map((row, index) => {
              return (<tr key={index}>{row.map((column,j)=>{
                return<td key={j}>{column}</td>
              })}</tr>)
            })
          }
          
       
         <tr> {
            cRow.map((coefficient, index) => {
              return (<td className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} key={index}>{coefficient}</td>)
            })
          }  </tr> 
          
        </tbody>

      </table >
    </div></>)
}


export default FConstraintEquations;
