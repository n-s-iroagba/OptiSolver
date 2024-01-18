import React   from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import { Button } from 'react-bootstrap'
import './solve.css'
import FRTableau2 from '../../components/tableau/Response/FRTableau2'
import { checkFirstTableau } from '../../utils/checkTableau'

const FResponseTableau2= ()=>{
   const{iTableau,setPage, dimensions,solvedArray,responseTableau,setResponseTableau,setIteration,setITableau,page,iteration,length} = useContext(MatrixContext)
   const check = async() => {
    setPage(2)
        setITableau(JSON.parse(localStorage.getItem('optiITableau')))
        const shouldAdvance = await checkFirstTableau(iTableau, solvedArray, 0, dimensions, responseTableau, setResponseTableau, setITableau)
         if (shouldAdvance){
          
                setPage(-5)
          
            
        }else{
            const iTableauJSON = JSON.stringify(iTableau);
            localStorage.setItem('optiITableau', iTableauJSON);
            if(page===-7){
                setPage(-8)
            }else{ setPage(-7)}        
        }
    }     
    return(
        <>
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup'> Some values in the first are wrong and highlighted in red</p></div>
        <div className='initial-solve'><FRTableau2/></div>
        <br/>
        <div><Button variant='dark' onClick={check}>Recheck first Iteration</Button></div>
        </div>
        </>
    )
}
export default FResponseTableau2