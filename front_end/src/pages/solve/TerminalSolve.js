import React from 'react'

import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { checkLastTableau } from '../../utils/checkTableau'
import './solve.css'
import TerminalIterationTableau from '../../components/tableau/input/TerminalIterationTableau'


const TerminalSolve = ()=>{
    
    const{responseTableau,setResponseTableau,iTableau,setITableau,setPage,iteration,solvedArray,dimensions} = useContext(MatrixContext)


    const navigate =  useNavigate()
    
    const id = localStorage.getItem('optiUserId');

 
     const check = async() => {
   
        const shouldAdvance= await checkLastTableau(iTableau, solvedArray, iteration-1, dimensions, responseTableau, setResponseTableau, setITableau)
       
        if(shouldAdvance){ 
            navigate('/dashboard')
            //save solution then alert 'completed and return to dashboard'
        }
        else{
            setPage(9)
        }
    }
   
       
    
    return(
        <>
    
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup' > Fill in the values for iteration number {iteration}</p></div>
        <div className='initial-solve'><TerminalIterationTableau/></div>
        <br/>
        <div><Button variant='dark' onClick={check}>Check last Iteration</Button></div>
        </div>
        </>
    )
}
export default TerminalSolve