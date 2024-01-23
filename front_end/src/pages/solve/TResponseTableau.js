import React from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext } from 'react'
import { checkLastTableau } from '../../utils/checkTableau'
import { Button } from 'react-bootstrap'
import './solve.css'
import TRTableau from '../../components/tableau/Response/TRTableau'
const TResponseTableau = () => {
   
    const { iTableau, setPage, dimensions, solvedArray, responseTableau, iteration, setResponseTableau, setITableau, page } = useContext(MatrixContext)
    const solve = async () => {

        const shouldAdvance = await checkLastTableau(iTableau, solvedArray, iteration - 1, dimensions, responseTableau, setResponseTableau, setITableau)
        if (shouldAdvance) {
            setPage(-2)

        } else {
            console.log(iTableau)
            if (page === 10) {
                setPage(11)
            } else { setPage(10) }

        }
    }

    return (
        <>
            <div className='solve-page-wrapper'>
                <div><p className='solve-writeup' > Fill in the values for iteration number {iteration}</p></div>
                <div className='initial-solve'><TRTableau /></div>
                <br />
                <div><Button variant='dark' onClick={solve}>Solve</Button></div>
            </div>
        </>
    )
}
export default TResponseTableau