import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import './pages.css'
import { checkTableau } from '../utils/iteration/checkTableau'



import ResponseTableau from '../features/solve_simplex/components/ResponseTableau'

const Response = ()=>{
  
const {iTableau,setITableau,solvedArray, index,setIndex,dimensions,rTableau,setRTableau,setChange,header} = useContext(MatrixContext)
const responseSolve = async ()=>{
    const shouldRefresh = await checkTableau(iTableau, solvedArray, index, setIndex, dimensions, rTableau, setRTableau, setITableau)
    if(shouldRefresh){
        alert('some values are still wrong')
    }

}
    
    return(
        <>
        <div className="is-wrap">
        <div className='initial-solve'><ResponseTableau/></div>
        <div className='s-button'><button onClick={()=>console.log(rTableau.basicCoefficients)}>Solve</button></div>
        </div>
        </>
    )
}
export default Response