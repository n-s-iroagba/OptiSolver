import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import './pages.css'
import { checkTableau } from '../utils/iteration/checkTableau'



import ResponseTableau from '../features/solve_simplex/components/ResponseTableau'

const Response = ()=>{
  
const {iTableau,setITableau,solvedArray, index,setIndex,dimensions,rTableau,setRTableau,setPage} = useContext(MatrixContext)
const responseSolve = async ()=>{
    const shouldAdvance = await checkTableau(iTableau, solvedArray, index, setIndex, dimensions, rTableau, setRTableau, setITableau)
    if(shouldAdvance){
        setPage(2)
    }else{
        alert('some values are still wrong')
        setPage(3)
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