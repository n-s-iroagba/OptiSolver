import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../context/ContextApi'
import './InitialSolve.css'
import { checkTableau } from '../utils/checkTableau'
import { preventNewLine } from '../utils/preventNewLine'
import { ceIPush } from '../utils/iteration/iPush'
import IterationTableau from '../components/IterationTableau/IterationTableau'
import { redirect, useNavigate} from 'react-router-dom'
const IterationSolve = ()=>{
  
const {iTableau,setITableau,solvedArray, index,setIndex,dimensions,rTableau,setRTableau,setChange} = useContext(MatrixContext)
const navigate = useNavigate()
const refresh = () => window.location.reload(true)
const iterateSolve = async ()=>{
    const shouldRefresh = await checkTableau(iTableau,solvedArray, index,setIndex,dimensions,rTableau,setRTableau,setChange,setITableau,preventNewLine,ceIPush)
    if(!shouldRefresh){
        refresh()
    }else{
        console.log('response')
        navigate('/response') 
    }
}
    
    return(
        <>
        <div className="is-wrap">

        <div className='initial-solve'><IterationTableau/></div>
        <div className='s-button'><button onClick={iterateSolve}>Solve</button></div>
        </div>
        </>
    )
}
export default IterationSolve