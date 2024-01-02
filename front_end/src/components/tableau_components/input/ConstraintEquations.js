

import { useState, useEffect } from 'react';
import { MatrixContext } from '../../../context/SimplexContext';
import { useContext } from 'react';
import '../tableau.css'
import InitialObjectiveCoefficient from './InitialObjectiveCoefficient';
import { createMultipleColumns } from '../../../utils/createTableauHelper';


const ConstraintEquations = (props) => {

  const [rows, setRows] = useState([])
const {header, setHeader,dimensions} = useContext(MatrixContext)


  useEffect(()=>{
  let variable= 'constraintEquations'
  createMultipleColumns(dimensions.numberOfRows,dimensions.numberOfColumns, setRows, props.tableau,props.setTableau, variable, setHeader)
  console.log(dimensions)
},[])

  return (<>

    <div className='center-tableau-wrapper'>
      <InitialObjectiveCoefficient />
      <table className='single-column'>
        <thead >
          <tr >{
            header.map((variable, index) => {
              return (<td style={{height:'1.6cm'}}key={index}>{variable}</td>)
            })}
          </tr>
        </thead>
        <tbody className='tableau-body' >
          {
            rows.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
        </tbody>
      </table >
      {
  (props.crow && props.crow.length > 0) ? (
    props.crow.map((cell, index) => (
      <td className='last-row' style={{ borderTop: '2px solid grey', height: '1.5cm' }} contentEditable key={index}>
        {cell}
      </td>
    ))
  ) : (
    <td className='last-row' style={{ borderTop: '2px solid grey', height: '1.5cm' }} contentEditable>
      {/* Empty cell */}
    </td>
  )
}


    </div>
    </>
    )
}


export default ConstraintEquations;
