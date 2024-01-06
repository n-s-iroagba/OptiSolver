import React, { useEffect, useState } from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import { solveSimplex } from '../../utils/api'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import './solve.css'
import FResponseTableau from '../../components/tableau/Response/FResponseTableau'
import { checkFirstTableau } from '../../utils/checkTableau'
const FResponseSolve= ()=>{
    
    const{setIndex,iTableau,setPage, dimensions,solvedArray,responseTableau,iteration,setResponseTableau,setIteration,setITableau,page} = useContext(MatrixContext)    
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
 
        const shouldAdvance = await checkFirstTableau(iTableau, solvedArray, 0, dimensions, responseTableau, setResponseTableau, setITableau)
         if (shouldAdvance){
           setPage(4)
           setIteration(2)
           setIndex(1)
       
        }else{
            console.log(page)
            if(page===5){
                setPage(3)
            }else{ setPage(5)}
            
        }
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