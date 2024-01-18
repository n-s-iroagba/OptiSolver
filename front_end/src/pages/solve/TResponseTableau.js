import React from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext } from 'react'
import { checkLastTableau } from '../../utils/checkTableau'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './solve.css'
import TRTableau from '../../components/tableau/Response/TRTableau'
const TResponseTableau = () => {
    const navigate = useNavigate()
    const { iTableau, setPage, dimensions, solvedArray, responseTableau, iteration, setResponseTableau, setITableau, page } = useContext(MatrixContext)
    const id = localStorage.getItem('optiUserId');
    const token = localStorage.getItem('optiUserToken')

    const url = `http://localhost:5000/solve/${id}`


    const solve = async () => {

        const shouldAdvance = await checkLastTableau(iTableau, solvedArray, iteration - 1, dimensions, responseTableau, setResponseTableau, setITableau)
        if (shouldAdvance) {
            navigate('/dashboard')

        } else {

            if (page === 10) {
                setPage(11)
            } else { setPage(10) }

        }
    }

    return (
        <>
            <div className='solve-page-wrapper'>
                <div><p className='solve-writeup' > Fill in the values for iteration number {page}</p></div>
                <div className='initial-solve'><TRTableau /></div>
                <br />
                <div><Button variant='dark' onClick={solve}>Solve</Button></div>
            </div>
        </>
    )
}
export default TResponseTableau