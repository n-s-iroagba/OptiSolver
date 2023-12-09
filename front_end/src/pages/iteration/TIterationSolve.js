import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../features/solve_simplex/context/SimplexContext'
import '../pages.css'
import { checkLastTableau } from '../../utils/iteration/checkTableau'
import TIterationTableau from '../../features/solve_simplex/components/TIterationTableau'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const TIterationSolve = ()=>{  
const navigate = useNavigate()

let { setPage,iTableau,setITableau,solvedArray,rTableau,setRTableau,index} = useContext(MatrixContext)

const tempdimensions=JSON.parse(localStorage.getItem('localDimensions'))
const dimensions = {numberOfColumns:parseInt(tempdimensions.numberOfColumns),
                         numberOfRows:parseInt(tempdimensions.numberOfRows)}
const id = localStorage.getItem('optiUserId')

const url = `http://localhost:5000/solve/${id}`
useEffect(()=>{
   
},[])
const iterateSolve = async ()=>{
    const shouldAdvance =  await checkLastTableau(iTableau, solvedArray, index, dimensions, rTableau, setRTableau, setITableau)
    if(!shouldAdvance){
        setPage(5)
        }else{
        alert("Bravo! You've correctly solved the simplex optimization problem")
        navigate('/welcome')
            }
          
           

    
        }
    
   

    
    return(
        <>
         <div className='solve-wrapper'>
        <div className="is-wrap">
        <div><p style={{width:'100vw',marginTop:'1cm'}}> Fill in the Simplex Tableau for the Last Iteration</p></div>
        <div className='initial-solve'><TIterationTableau/></div>
        <div className='s-button'><button onClick={iterateSolve}>Solve</button>
        <br/>
        </div>
        </div>
        </div>
        </>
    )
}
export default TIterationSolve