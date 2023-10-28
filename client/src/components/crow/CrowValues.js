import React, { useContext } from 'react'
import { useState } from 'react'
import { MatrixContext } from '../../context/ContextApi'
import './Crow.css'

const CrowValues = ()=> {
    const {tableau,cellSize} = useContext(MatrixContext)
    return<>
    <div className="cr-wrapper">
    <div className='empty' style={{width:cellSize}}></div>
  
        
     <tr>
     <th className='cr-title'>Crow</th>
        {tableau.cRow.map((coefficient,index)=>{
            return(<td style={{width:cellSize}} contentEditable key={index}>{coefficient}</td>)
        })}
     </tr>
    
    
    <div className='f-box' >F = <span contentEditable>_</span></div>
    <div className='empty' ></div>
    </div>
    </>

}
export default CrowValues