import React from 'react'

import './pages.css'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import { useContext,useEffect } from 'react'
import InitialTableau from '../features/solve_simplex/components/InitialTableau'
import createObjectiveCoefficient from '../utils/initialize/createObjectiveCoefficients'
import { preventNewLine } from '../utils/preventNewLine'

const InitialSolve = ()=>{
    const{tableau,setTableau,dimensions,setPage,page} = useContext(MatrixContext)
    const iterate =async () => {
        await setPage(2)
    }

    useEffect(()=>{
        createObjectiveCoefficient(dimensions,tableau,setTableau,preventNewLine) 
        },[])
    return(
        <>
        <div className="is-wrap">
        <div className='initial-solve'><InitialTableau/></div>
        <button onClick={iterate}>Solve</button>
        </div>
        </>
    )
}
export default InitialSolve