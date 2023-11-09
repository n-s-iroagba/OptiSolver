import React, { useEffect } from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import './pages.css'
import FResponseTableau from '../features/solve_simplex/components/FResponseTableau'
import {checkTableau } from '../utils/iteration/checkTableau'
import {useNavigate} from 'react-router-dom'
const FirstSolve = ()=>{
    const navigate=useNavigate()
  
const {setPage,iTableau,setITableau,solvedArray,tableau, index,setIndex,dimensions,rTableau,setRTableau,iteration,setIteration,length} = useContext(MatrixContext)
useEffect(()=>{
    const temp = tableau
    const tempItab = iTableau
    tempItab.constraintEquations = temp.constraintEquations
    tempItab.basicVariables = temp.basicVariables
    tempItab.basicCoefficients = temp.basicCoefficients
    tempItab.constants = temp.constants
    tempItab.cRow = temp.cRow
    console.log(tempItab)
    setITableau(tempItab)
})
const firstSolve = async ()=>{
     const shouldAdvance=await checkTableau(iTableau, solvedArray, index, dimensions, rTableau, setRTableau, setITableau)
    if(!shouldAdvance){
        setPage(3)
    }else{
    if(iteration === length){
        alert('this is the last iteration and you got it right')
        navigate('/welcome')

    }else{
        await setPage(4)
        await setIteration(iteration+1)

    }
    }
    
}
    
    return(
        <>
        <div className='solve-wrapper'>
        <div className="is-wrap">
        <div><p style={{width:'100vw',marginTop:'1cm'}}> Fill in the simplex Tableau for the first Iteration</p></div>
        <div className='initial-solve'><FResponseTableau/></div>
        <div className='s-button'><button onClick={firstSolve}>Solve</button></div>
        </div>
        </div>
        </>
    )
}
export default FirstSolve