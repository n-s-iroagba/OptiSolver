import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import './pages.css'
import { checkTableau } from '../utils/iteration/checkTableau'
import IterationTableau from '../features/solve_simplex/components/IterationTableau'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const IterationSolve = ()=>{  
    const navigate = useNavigate()

let { setPage,iTableau,setITableau,solvedArray,rTableau,setRTableau} = useContext(MatrixContext)
const dimensions = JSON.parse(localStorage.getItem('localDimensions'))
const iterationNumber = localStorage.getItem('iteration')
const id = localStorage.getItem('optiUserId')
const token = localStorage.getItem('optiUserToken')
const index = localStorage.getItem('optiUserId')
const length=localStorage.getItem('length')
const url = `http://localhost:5000/solve/${id}`
useEffect(()=>{
    console.log(token)
  
    if(iterationNumber===length+1){
        navigate('/welcome')
    }
    
 
},[])
const iterateSolve = async ()=>{
    alert(JSON.stringify(solvedArray))
    const shouldAdvance =  await checkTableau(iTableau, solvedArray, index, dimensions, rTableau, setRTableau, setITableau)
    if(!shouldAdvance){
        setPage(3)
        }else{
        alert('issues')
            }
          
           

    
        }
    
   

    
    return(
        <>
         <div className='solve-wrapper'>
        <div className="is-wrap">
        <div><p style={{width:'100vw',marginTop:'1cm'}}> Fill in the Simplex Tableau for iteration number: {iterationNumber}</p></div>
        <div className='initial-solve'><IterationTableau/></div>
        <div className='s-button'><button onClick={iterateSolve}>Solve</button>
        <br/>
        </div>
        </div>
        </div>
        </>
    )
}
export default IterationSolve