import React from 'react'
import TerminalTableau from '../components/TerminalTableau/TerminalTableau'
import './InitialSolve.css'
import { MatrixContext } from '../context/ContextApi'
import { useContext } from 'react'

const InitialSolve = ()=>{
    const{tableau} = useContext(MatrixContext)
    return(
        <>
        <div className="is-wrap">
        <div className='initial-solve'><TerminalTableau/></div>
        <div className='s-button'><button onClick={(e)=>{
           console.log(tableau)
        }}>Solve</button></div>
        </div>
        </>
    )
}
export default InitialSolve