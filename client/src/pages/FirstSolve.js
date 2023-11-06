import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import './pages.css'
import FResponseTableau from '../features/solve_simplex/components/FResponseTableau'
import { checkFirstSolve } from '../utils/iteration/checkTableau'
const IterationSolve = ()=>{
  
const {setPage,page,iTableau,setITableau,solvedArray,tableau, index,setIndex,dimensions,rTableau,setRTableau,setChange} = useContext(MatrixContext)

const firstSolve = async ()=>{
    const shouldAdvance =  checkFirstSolve(iTableau, solvedArray, index, setIndex, dimensions, rTableau, setRTableau, setITableau)
    if(!shouldAdvance){
        setPage(3)
    }else{
        
        setPage(4)
    }
    console.log(page)
}
    
    return(
        <>
        <div className="is-wrap">

        <div className='initial-solve'><FResponseTableau/></div>
        <div className='s-button'><button onClick={firstSolve}>Solve</button></div>
        </div>
        </>
    )
}
export default IterationSolve