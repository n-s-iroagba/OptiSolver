import React, { useState } from 'react'

import './pages.css'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import { useContext} from 'react'
import InitialTableau from '../features/solve_simplex/components/InitialTableau'
import { solveSimplex } from '../utils/api'

const InitialSolve = ()=>{
    
    const{tableau,setPage,setSolvedArray,setLength,solvedArray} = useContext(MatrixContext)
    const [loading,setLoading] = useState('not-seen')
    const [classname,setClassname] = useState('is-wrap')
    const iterate = async() => {
        alert('Solving.....!!! This may take a few minutes to complete')
        setClassname('not-seen')
        setLoading('seen')
        const solution = await solveSimplex(tableau)
        if (solution){
        await setSolvedArray([...solvedArray,solution.data])
        setLoading('not-seen')
         await setPage(2)
           const length = solution.data[0].length
           console.log(length)
           setLength(length)
           setPage(2)
        }
    }
    return(
        <>
        <div className='solve-wrapper'>
        <div className={loading}>Loading</div>
        <div className={classname}>
        <div><p style={{width:'100vw',marginTop:'1cm'}}> Fill in the initial Simplex Tableau</p></div>
        <div className='initial-solve'><InitialTableau/></div>
        <button onClick={iterate}>Solve</button>
        </div>
        </div>
        </>
    )
}
export default InitialSolve