import React, { useEffect, useState } from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import { solveSimplex } from '../../utils/api'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import './solve.css'

import TerminalIterationTableau from '../../components/tableau/input/TerminalIterationTableau'
const TerminalResponseSolve= ()=>{
    const navigate = useNavigate()
    const{iTableau,setPage, dimensions,solvedArray,responseTableau,iteration,setResponseTableau,setITableau} = useContext(MatrixContext)    
    const id = localStorage.getItem('optiUserId');
    const token = localStorage.getItem('optiUserToken')

    const url = `http://localhost:5000/solve/${id}`

    
   const solve = async() => {
 
        const shouldAdvance = await checkLastTableau(iTableau, solvedArray, iteration-1, dimensions, responseTableau, setResponseTableau, setITableau)
         if (shouldAdvance){
            navigate('/dashboard')
        
        }else{
          
            if(page===9){
                setPage(10)
            }else{ setPage(9)}
            
        }
    }  
    
    return(
        <>
    
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup' > Fill in the values for iteration number {iteration}</p></div>
        <div className='initial-solve'><TerminalIterationTableau/></div>
        <br/>
        <div><Button variant='dark' onClick={solve}>Solve</Button></div>
        </div>
        </>
    )
}
export default TerminalResponseSolve