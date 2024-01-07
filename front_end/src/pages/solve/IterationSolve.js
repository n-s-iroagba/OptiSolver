import React, { useEffect} from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext } from 'react'
import IterationTableau from '../../components/tableau/input/IterationTableau'
import { checkTableau } from '../../utils/checkTableau'
import { Button } from 'react-bootstrap'
import './solve.css'


const IterationSolve = React.memo(() => {
    const { setPage, length, setIteration, iteration, solvedArray, iTableau, setITableau, responseTableau, setResponseTableau, dimensions, } = useContext(MatrixContext)

    useEffect(() => {

        if (iteration === length) {
            setPage(8)

        }
        alert(JSON.stringify(solvedArray))
    }, [])

    const check = async () => {

        const shouldAdvance = await checkTableau(iTableau, solvedArray, iteration - 1, dimensions, responseTableau, setResponseTableau, setITableau)
        alert(JSON.stringify(iTableau))
        if (!shouldAdvance) {
            setPage(7)
    
        }
        else {
            setPage(4)
            setIteration(2)
            setIteration(iteration + 1)
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
})
export default IterationSolve