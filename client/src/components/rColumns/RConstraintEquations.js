
import { MatrixContext } from '../../context/ContextApi';
import { useContext } from 'react';
import './Matrix.css'
import ObjectiveCoefficient from './ObjectiveCoefficient';

function RConstraintEquations() {
  const { rTableau,header} = useContext(MatrixContext)
 


  return (<>

    <div className='ce-wrapper'>
      
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
            rTableau.constraintEquations.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
          {
            rTableau.crow.map((coefficient, index) => {
              return (<td className='last-row' style={{borderTop:'2px solid grey',height:'1.5cm'}} contentEditable key={index}>{coefficient}</td>)
            })
          }
          
        </tbody>

      </table >
    </div></>)
}


export default RConstraintEquations;
