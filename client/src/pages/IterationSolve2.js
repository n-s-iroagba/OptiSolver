import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import './pages.css'
import { checkTableau } from '../utils/iteration/checkTableau'
import { useContext } from 'react'
import IterationTableau from '../features/solve_simplex/components/IterationTableau'
import {useNavigate} from 'react-router-dom'
const IterationSolve2 = () => {
   const navigate = useNavigate()
    const { length, iteration, setIteration, setPage, page, iTableau, setITableau, solvedArray, index, setIndex, dimensions, rTableau, setRTableau } = useContext(MatrixContext)
    const iterateSolve = async () => {
        const shouldAdvance = await checkTableau(iTableau, solvedArray, index, setIndex, dimensions, rTableau, setRTableau, setITableau)
        if (shouldAdvance) {
            if (iteration === length) {
                alert('this is the last iteration and you got it right')
                navigate('/welcome')

            } else {
                await setPage(4)
                await setIteration(iteration + 1)

            }
        } else {

            await setPage(3)
        }
        console.log(page)
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