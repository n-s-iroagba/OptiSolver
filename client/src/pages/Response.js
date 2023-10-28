import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../context/ContextApi'
import './InitialSolve.css'
import { checkTableau } from '../utils/checkTableau'
import { preventNewLine } from '../utils/preventNewLine'
import { ceIPush } from '../utils/iteration/iPush'

import ResponseTableau from '../components/responseTableau/ResponseTableau'
import { redirect, useNavigate} from 'react-router-dom'
const Response = ()=>{
  
const {iTableau,setITableau,solvedArray, index,setIndex,dimensions,rTableau,setRTableau,setChange} = useContext(MatrixContext)
const navigate = useNavigate()
const refresh = () => window.location.reload(true)
const responseSolve = async ()=>{
    const shouldRefresh = await checkTableau(iTableau,solvedArray, index,setIndex,dimensions,rTableau,setRTableau,setChange,setITableau,preventNewLine,ceIPush)
    if(shouldRefresh){
        alert('some values are still wrong')
    }else{
        navigate('/iterate') 
    }

}
    
    return(
        <>
        <div className="is-wrap">
        <div className='initial-solve'><ResponseTableau/></div>
        <div className='s-button'><button onClick={responseSolve}>Solve</button></div>
        </div>
        </>
    )
}
export default Response