import React from 'react'

import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import FirstIterationTableau from '../../components/tableau/input/FirstIterationTableau'
import { Button } from 'react-bootstrap'
import { checkFirstTableau } from '../../utils/checkTableau'

import './solve.css'


const FirstSolve = ()=>{
    
    const{setPage,setIteration,iteration,solvedArray,responseTableau, setResponseTableau, setITableau,iTableau,dimensions} = useContext(MatrixContext)
    
   const check = async() => {
   
    const shouldAdvance= await checkFirstTableau(iTableau, solvedArray, 0, dimensions, responseTableau, setResponseTableau, setITableau)
    console.log(solvedArray)
    if(shouldAdvance){ 
        setPage(5)
        setIteration(2)
    }
    else{
        setPage(3)
        setIteration(2)
    }
}
    
    return(
        <>
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup' > Fill in the values for iteration number {iteration}</p></div>
        <div className='initial-solve'><FirstIterationTableau/></div>
        <br/>
        <div><Button variant='dark' onClick={check}>Check First Iteration</Button></div>
        </div>
        </>
    )
}
export default FirstSolve