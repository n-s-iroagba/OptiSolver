import React, { useEffect, useState } from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext } from 'react'
import ITableau from '../../components/tableau/input/ITableau'
import { checkTableau } from '../../utils/checkTableau'
import { Button } from 'react-bootstrap'
import './solve.css'


const IterationTableau = React.memo(() => {
    const { setPage, length, setIteration, iteration, solvedArray, iTableau, setITableau, responseTableau, setResponseTableau, dimensions, page, solution } = useContext(MatrixContext)
    useEffect(() => {
        if (iteration === length && solvedArray[iteration - 1]?.ratio?.length === 0) {
            setPage(9);
        }
    }, [])

    const check = async () => {
        const shouldAdvance = await checkTableau(iTableau, solvedArray, iteration - 1, dimensions, responseTableau, setResponseTableau, setITableau)
        console.log(solvedArray[iteration - 1])
        if (shouldAdvance) {
            if (solvedArray[iteration - 1].optimal == true) {
                setPage(-2)
            } else {
                setIteration(iteration + 1)
                if (page === 5) {
                    setPage(6)
                } else { setPage(5) }
            }
        }
        else {
            setPage(7)
        }
    }

    return (
        <>
            <div className='solve-page-wrapper'>
                <div><p className='solve-writeup' > Fill in the values for iteration number {iteration}</p></div>
                <div className='initial-solve'><ITableau /></div>
                <br />
                <div><Button variant='dark' onClick={check}>Check for iteration {iteration}</Button></div>
            </div>
        </>
    )
})
export default IterationTableau
