import React, { useContext } from 'react'
import { MatrixContext } from '../../../context/SimplexContext'
import '../tableau.css'
import Empty from '../Empty'
const RRatio = () => {
    const { responseTableau } = useContext(MatrixContext)


    return <>
           <div className='right-tableau-wrapper'>
     <Empty position='inverse-bottom' type={"right"}/>
      <table className='single-column' >
        <thead>
          <tr>
            <th>Ratio</th>
          </tr>
        </thead>
        <tbody className='tableau-body'>
          {
            responseTableau.ratio.map((row, index) => {
              return (<tr key={index}>{row}</tr>)
            })
          }
        </tbody>
      </table>
      <Empty/>
    </div>
  
    </>
}
export default RRatio;