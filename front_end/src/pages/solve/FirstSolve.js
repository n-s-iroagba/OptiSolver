import React, { useEffect, useState } from 'react'

import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import FirstIterationTableau from '../../components/tableau/input/FirstIterationTableau'
import { solveSimplex } from '../../utils/api'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { checkFirstTableau } from '../../utils/checkTableau'

import './solve.css'


const FirstSolve = ()=>{
    
    const{tableau,setPage,setSolvedArray,setLength,setIteration,iteration,solvedArray,responseTableau, setResponseTableau, setITableau,iTableau,dimensions} = useContext(MatrixContext)


    const navigate =  useNavigate()
    
    const id = localStorage.getItem('optiUserId');
    const token = localStorage.getItem('optiUserToken')

  

//     useEffect(()=>{

//        if(!token||token===''){
//        alert('kindly login to access optiSolver')
//         navigate('/login')
//        }

//     },[])
    
   const iterate = async() => {
    console.log(tableau)
    const shouldAdvance= await checkFirstTableau(iTableau, solvedArray, 0, dimensions, responseTableau, setResponseTableau, setITableau)
    if(shouldAdvance){ 
        setPage(3)
    }
}
    
    return(
        <>
    
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup' > Fill in the values for iteration number {iteration}</p></div>
        <div className='initial-solve'><FirstIterationTableau/></div>
        <br/>
        <div><Button variant='dark' onClick={iterate}>Solve</Button></div>
        </div>
        </>
    )
}
export default FirstSolve