import React from 'react'

import './pages.css'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import { useContext} from 'react'
import InitialTableau from '../features/solve_simplex/components/InitialTableau'
import { solveSimplex } from '../utils/api'

const InitialSolve = ()=>{
    
    const{tableau,setPage,setSolvedArray,setLength} = useContext(MatrixContext)
    const iterate = async() => {
        const solution = await solveSimplex(tableau)
        if (solution){
           await setSolvedArray(solution.data)
           await setPage(2)
           const length = solution.data.length
           setLength(length)
        }
    }
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