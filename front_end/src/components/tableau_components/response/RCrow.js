import React, { useContext } from 'react'
import { MatrixContext } from '../../../context/SimplexContext'
import '../tableau.css'

const RCrow = () => {
const {responseTableau } = useContext(MatrixContext)
return (
    <>
    <table className='crow'>
        <tbody>
          <tr>
          {
            responseTableau.crow.map((row, index) => {
              return (<th key={index}>{row}</th>)
            })
          }
          </tr>
        </tbody>
      </table>
    </>
) 
}
export default RCrow;