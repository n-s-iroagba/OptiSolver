import React   from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import { Button } from 'react-bootstrap'


import './solve.css'
import FRTableau from '../../components/tableau/Response/FRTableau'
import { checkFirstTableau } from '../../utils/checkTableau'
const FResponseSolve= ()=>{
    
   const{iTableau,setPage, dimensions,solvedArray,responseTableau,setResponseTableau,setIteration,setITableau,page,iteration,length} = useContext(MatrixContext)
   const check = async() => {
        setITableau(JSON.parse(localStorage.getItem('optiITableau')))
        const shouldAdvance = await checkFirstTableau(iTableau, solvedArray, 0, dimensions, responseTableau, setResponseTableau, setITableau)
         if (shouldAdvance){
            if (iteration === length) {
                setPage(-2)
            } else {
           setPage(5)
           setIteration(2)
            }
        }else{
            const iTableauJSON = JSON.stringify(iTableau);
            localStorage.setItem('optiITableau', iTableauJSON);
            if(page===3){
                setPage(4)
            }else{ setPage(3)}        
        }
    }     
    return(
        <>
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup'> Some values in the first are wrong and highlighted in red</p></div>
        <div className='initial-solve'><FRTableau/></div>
        <br/>
        <div><Button variant='dark' onClick={check}>Recheck first Iteration</Button></div>
        </div>
        </>
    )
}
export default FResponseSolve