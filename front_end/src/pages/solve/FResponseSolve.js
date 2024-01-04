import React, { useEffect, useState } from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import { solveSimplex } from '../../utils/api'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import './solve.css'
import FResponseTableau from '../../components/tableau/Response/FResponseTableau'
const FResponseSolve= ()=>{
    
    const{tableau,setPage,setSolvedArray,setLength,setIteration,iteration} = useContext(MatrixContext)


    const navigate =  useNavigate()
    
    const id = localStorage.getItem('optiUserId');
    const token = localStorage.getItem('optiUserToken')

    const url = `http://localhost:5000/solve/${id}`

//     useEffect(()=>{

//        if(!token||token===''){
//        alert('kindly login to access optiSolver')
//         navigate('/login')
//        }

//     },[])
    
   const solve = async() => {
    console.log(tableau)
        const solutionResponse = await solveSimplex(url,tableau,token)
         if (solutionResponse){
           const length = solutionResponse.solution.length
           console.log(solutionResponse)
        setSolvedArray(solutionResponse.solution)
        //     setLength(length)
        //     setIteration(1)
        //     setLoading('not-seen')
        //     setPage(1)
          } // }
    }  
    
    return(
        <>
    
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup' > Fill in the values for iteration number {iteration}</p></div>
        <div className='initial-solve'><FResponseTableau/></div>
        <br/>
        <div><Button variant='dark' onClick={solve}>Solve</Button></div>
        </div>
        </>
    )
}
export default FResponseSolve