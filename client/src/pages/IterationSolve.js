import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import './pages.css'
import { checkTableau } from '../utils/iteration/checkTableau'
import IterationTableau from '../features/solve_simplex/components/IterationTableau'

const IterationSolve = ()=>{  
const {iteration, setIteration,length,setPage,iTableau,setITableau,solvedArray,index,setIndex,dimensions,rTableau,setRTableau} = useContext(MatrixContext)

const iterateSolve = async ()=>{
    const shouldAdvance =  await checkTableau(iTableau, solvedArray, index, setIndex, dimensions, rTableau, setRTableau, setITableau)
    if(!shouldAdvance){
        setPage(3)
    }else{
        if(iteration === length){
            setPage(7)
        }else{
        setPage(4)
        setIteration(iteration+1)
        }
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