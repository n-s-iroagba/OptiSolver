import React, { useEffect} from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext } from 'react'
import IterationTableau from '../../components/tableau/input/IterationTableau'
import { checkTableau } from '../../utils/checkTableau'
import { Button } from 'react-bootstrap'
import './solve.css'


const IterationSolve = () => {
    const { setPage, length, setIteration, iteration, solvedArray, iTableau, setITableau, responseTableau, setResponseTableau, dimensions, } = useContext(MatrixContext)

    useEffect(() => {

        if (iteration === length) {
            setPage(8)

        }
    }, [iteration,length,setPage])

    const check = async () => {

        const shouldAdvance = await checkTableau(iTableau, solvedArray, iteration - 1, dimensions, responseTableau, setResponseTableau, setITableau)

        if (shouldAdvance) {
            setPage(6)
            setIteration(iteration + 1)
        }
        else {
            setPage(4)
            setIteration(2)
        }
    }

    return (
        <>
         <div className='solve-page-wrapper'>
                <div><p className='solve-writeup' > Fill in the values for iteration number {iteration}</p></div>
                <div className='initial-solve'><IterationTableau /></div>
                <br />
                <div><Button variant='dark' onClick={check}>check for iteration {iteration}</Button></div>
            </div>
        </>
    )
}
export default IterationSolve