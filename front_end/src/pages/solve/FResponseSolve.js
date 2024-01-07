import React   from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import { Button } from 'react-bootstrap'


import './solve.css'
import FResponseTableau from '../../components/tableau/Response/FResponseTableau'
import { checkFirstTableau } from '../../utils/checkTableau'
const FResponseSolve= ()=>{
    
   const{iTableau,setPage, dimensions,solvedArray,responseTableau,iteration,setResponseTableau,setIteration,setITableau,page} = useContext(MatrixContext)
   const check = async() => {
        const shouldAdvance = await checkFirstTableau(iTableau, solvedArray, 0, dimensions, responseTableau, setResponseTableau, setITableau)
         if (shouldAdvance){
           setPage(5)
           setIteration(2)
        }else{
            alert(JSON.stringify(solvedArray))
            if(page===3){
                setPage(4)
            }else{ setPage(3)}
            
        }
    }  
    
    return(
        <>
    
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup' > Fill in the values for iteration number {iteration}</p></div>
        <div className='initial-solve'><FResponseTableau/></div>
        <br/>
        <div><Button variant='dark' onClick={check}>Recheck first Iteration</Button></div>
        </div>
        </>
    )
}
export default FResponseSolve