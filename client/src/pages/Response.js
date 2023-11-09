import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import './pages.css'
import { checkTableau } from '../utils/iteration/checkTableau'
import {useNavigate} from 'react-router-dom'


import ResponseTableau from '../features/solve_simplex/components/ResponseTableau'

const Response = ()=>{
const navigate = useNavigate()
const {setIteration,iteration,iTableau,setITableau,solvedArray, index,setIndex,dimensions,rTableau,setRTableau,setPage,length} = useContext(MatrixContext)
const responseSolve = async ()=>{
    const shouldAdvance = await checkTableau(iTableau, solvedArray, index, setIndex, dimensions, rTableau, setRTableau, setITableau)
    if(shouldAdvance){
    
            if(iteration === length){
                alert('this is the last iteration and you got it right')
                navigate('/welcome')
        
            }else{
                await setPage(4)
                await setIteration(iteration+1)
        
            }
        }else{
        alert('some values are still wrong')
        setPage(3)
    }

}
    
    return(
        <>
         <div className='solve-wrapper'>
        <div className="is-wrap">
        <div><p style={{width:'100vw',marginTop:'1cm'}}>Some of the Values were wrong and are highlighted in red for iteration number: {iteration}</p></div>
        <div className='initial-solve'><ResponseTableau/></div>
        <div className='s-button'><button onClick={responseSolve}>Solve</button></div>
        </div>
        </div>
        </>
    )
}

export default Response