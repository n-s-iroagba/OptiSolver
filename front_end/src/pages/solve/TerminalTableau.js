import React from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { checkLastTableau } from '../../utils/checkTableau'
import './solve.css'
import TTableau from '../../components/tableau/input/TTableau'


const TerminalTableau = ()=>{
    
    const{responseTableau,setResponseTableau,iTableau,setITableau,setPage,iteration,solvedArray,dimensions,page} = useContext(MatrixContext)
   
 
     const check = async() => {
        const shouldAdvance= await checkLastTableau(iTableau, solvedArray, iteration-1, dimensions, responseTableau, setResponseTableau, setITableau)
       
        if(shouldAdvance){ 
           setPage(-2)
        }
        else{
            setPage(10)
        }
    } 
    return(
        <>    
        <div className='solve-page-wrapper'>
        <div><p className='solve-writeup' > Fill in the values for the last iteration</p></div>
        <div className='initial-solve'><TTableau/></div>
        <br/>
        <div><Button variant='dark' onClick={check}>Check last Iteration</Button></div>
        </div>
        </>
    )
}
export default TerminalTableau