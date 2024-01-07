import React from 'react'
import { useContext } from 'react'
import Empty from '../Empty'
import { MatrixContext } from '../../../context/SimplexContext'
import '../tableau.css'
import RFValue from './RFValue'

const RConstants = (props) => {
    const { responseTableau } = useContext(MatrixContext)
    let className = ''
let emptyName = ''
if(props.rightEnd){
   className = 'right-tableau-wrapper'
   emptyName= 'right'
}
else{
  className = 'center-tableau-wrapper'
}

    
    return <>
        <div className={className}>
     <Empty  type ={emptyName} constant = {true} position='inverse-bottom'/>
      <table className='constants' >
        <thead>
          <tr>
            <th>Constants</th>
          </tr>
        </thead>
        <tbody className='tableau-body'>
                    {
                        responseTableau.constants.map((row, index) => {
                            return (<tr key={index}>{row}</tr>)
                        })
                    }
                   
                </tbody>
                <RFValue/>  
            </table>
         
        </div>

    </>

}
export default RConstants;