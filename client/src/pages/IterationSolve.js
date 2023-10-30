import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import './pages.css'
import { checkTableau } from '../utils/iteration/checkTableau'
import { preventNewLine } from '../utils/preventNewLine'
import { ceIPush } from '../utils/iteration/iPush'
import IterationTableau from '../features/solve_simplex/components/IterationTableau'
import { useNavigate} from 'react-router-dom'
const IterationSolve = ()=>{
  
const {setPage,page,iTableau,setITableau,solvedArray,tableau, index,setIndex,dimensions,rTableau,setRTableau,setChange} = useContext(MatrixContext)
const navigate = useNavigate()
const refresh = () => window.location.reload(true)
const iterateSolve = async ()=>{
    const shouldAdvance =  await checkTableau(iTableau, solvedArray, index, setIndex, dimensions, rTableau, setRTableau, setITableau)
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

        <div className='initial-solve'><IterationTableau/></div>
        <div className='s-button'><button onClick={iterateSolve}>Solve</button></div>
        </div>
        </>
    )
}
export default IterationSolve