
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext';
import { useContext } from 'react';
import '../tableauComponents.css'
import ObjectiveCoefficient from '../ObjectiveCoefficient';

const RConstraintEquations=()=>{
  const {header,rTableau} = useContext(MatrixContext)
  
  
  return (<>

    <div className='ce-wrapper'>
    <ObjectiveCoefficient />
      <table className='ce'>
      <tr >{
            header.map((variable, index) => {
              return (<th key={index}>{variable}</th>)
            })}
          </tr>
        <tbody >
          {
            rTableau.constraintEquations.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
          
          {
            rTableau.cRow.map((coefficient, index) => {
              return (<td className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} contentEditable key={index}>{coefficient}</td>)
            })
          }
          
          
        </tbody>

      </table >
    </div></>)
}


export default RConstraintEquations;
