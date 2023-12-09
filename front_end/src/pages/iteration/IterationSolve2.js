import { MatrixContext } from '../../features/solve_simplex/context/SimplexContext'
import '../pages.css'
import { checkTableau } from '../../utils/iteration/checkTableau'
import { useContext,useEffect } from 'react'
import IterationTableau from '../../features/solve_simplex/components/IterationTableau'
import {useNavigate} from 'react-router-dom'
const IterationSolve2 = () => {
   const navigate = useNavigate()
    const { length, iteration, setIteration, setPage, page, iTableau, setITableau, solvedArray, index, setIndex, rTableau, setRTableau } = useContext(MatrixContext)
    const dimensions = localStorage.getItem('dimensions')
    
useEffect(()=>{
    
    if(iteration===length+1){
        navigate('/welcome')
    }
    if (iteration==length)
    {
        alert('last iteration')
    }
    
 
},[])
    const iterateSolve = async () => {
        const shouldAdvance = await checkTableau(iTableau, solvedArray, index, dimensions, rTableau, setRTableau, setITableau)
        if (shouldAdvance) {
            
                await setPage(2)
                await setIteration(iteration + 1)
                await  setIndex(index+1)

        } else {

            await setPage(3)
        }
    
    }

    return (
        <>
            <div className='solve-wrapper'>
                <div className="is-wrap">
                    <div><p style={{ width: '100vw', marginTop: '1cm' }}> Fill in the Simplex Tableau for iteration number: {iteration}</p></div>
                    <div className='initial-solve'><IterationTableau /></div>
                    <div className='s-button'><button onClick={iterateSolve}>Solve</button></div>
                </div>
            </div>
        </>
    )
}



export default IterationSolve2