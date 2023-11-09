import React, { useContext} from 'react'
import '../tableauComponents.css'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'





const FBasicVariables = () => {

  const {tableau} = useContext(MatrixContext)

  return <>
    <div className='b-wrapper'>
      <table style={{ heigth: '1.2cm', borderLeft: '3px solid grey' }}>
        <tr>
          <th >Ci</th>
        </tr>
      </table>
      <table className='basis'>
        <thead>
          <tr>
            <th><td>Basis</td></th>
          </tr>
        </thead>
        <tbody>
          {
            tableau.basicVariables.map((row, index) => {
              return (<tr className='small-font' key={index}><td>X<sub>{row}</sub></td></tr>)
            })
          }

          {
            <tr ><td style={{ height: '1.5cm', borderTop: '2px solid grey', fontSize: 'small' }}><b>C-Row</b></td></tr>
          }
        </tbody>
      </table>
    </div>
  </>
}
export default FBasicVariables;