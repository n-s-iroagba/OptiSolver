import React from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import FTableau from '../../components/tableau/input/FTableau'
import { Button } from 'react-bootstrap'
import { checkFirstTableau } from '../../utils/checkTableau'
import './solve.css'

const FIterationTableau = ()=>{
    const{setPage,setIteration,solvedArray,responseTableau, setResponseTableau, setITableau,iTableau,dimensions} = useContext(MatrixContext)
    const check = async() => {
    const shouldAdvance= await checkFirstTableau(iTableau, solvedArray, 0, dimensions, responseTableau, setResponseTableau, setITableau)
        if (shouldAdvance) {
            console.log(solvedArray)
            if (!Array.isArray(solvedArray)) {
                setPage(-2)
            } else {
                setPage(5)
                setIteration(2)
            }
         } else {
            const iTableauJSON = JSON.stringify(iTableau);
            localStorage.setItem('optiITableau', iTableauJSON);
            setPage(3)
        }
    } 
    return(
        <>
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup' > Fill in the values for first iteration</p></div>
        <div className='initial-solve'><FTableau/></div>
        <br/>
        <div><Button variant='dark' onClick={check}>Check First Iteration</Button></div>
        </div>
        </>
    )
}
export default FIterationTableau