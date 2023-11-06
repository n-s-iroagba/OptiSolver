import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import './pages.css'
import { checkTableau } from '../utils/iteration/checkTableau'
import { useContext } from 'react'
import IterationTableau from '../features/solve_simplex/components/IterationTableau'

const IterationSolve2= ()=>{
  
const {length,iteration, setIteration,setPage,page,iTableau,setITableau,solvedArray, index,setIndex,dimensions,rTableau,setRTableau} = useContext(MatrixContext)


const iterateSolve = async ()=>{
    const shouldAdvance =  await checkTableau(iTableau, solvedArray, index, setIndex, dimensions, rTableau, setRTableau, setITableau)
    if(shouldAdvance){
        if(iteration === length){
            setPage(7)
        }else{
        setPage(2)
        setIteration(iteration+1)
        }
    }else{
        
        await setPage(3)
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
export default IterationSolve2