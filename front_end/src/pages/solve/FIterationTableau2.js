import React from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import FTableau2 from '../../components/tableau/input/FTableau2'
import { Button } from 'react-bootstrap'
import { checkFirstTableau } from '../../utils/checkTableau'
import './solve.css'

const FIterationTableau2 = ()=>{
    const{setPage,setIteration,solvedArray,responseTableau, setResponseTableau, setITableau,iTableau,dimensions} = useContext(MatrixContext)
    const check = async() => {
    const shouldAdvance= await checkFirstTableau(iTableau, solvedArray, 0, dimensions, responseTableau, setResponseTableau, setITableau)
        if (shouldAdvance) {
                setPage(-5)
           
         } else {
           
            setPage(-7)
        }
    } 
    return(
        <>
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup' > Fill in the values for first iteration</p></div>
        <div className='initial-solve'><FTableau2/></div>
        <br/>
        <div><Button variant='dark' onClick={check}>Check First Iteration</Button></div>
        </div>
        </>
    )
}
export default FIterationTableau2