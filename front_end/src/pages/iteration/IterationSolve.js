import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../features/solve_simplex/context/SimplexContext'
import '../pages.css'
import { checkTableau } from '../../utils/iteration/checkTableau'
import IterationTableau from '../../features/solve_simplex/components/IterationTableau'
import { useEffect } from 'react'

const IterationSolve = ()=>{  
let {length, setPage,iTableau,setITableau,solvedArray,rTableau,setRTableau,index,setIndex,iteration,setIteration} = useContext(MatrixContext)
const tempdimensions=JSON.parse(localStorage.getItem('localDimensions'))
const dimensions = {numberOfColumns:parseInt(tempdimensions.numberOfColumns),
                         numberOfRows:parseInt(tempdimensions.numberOfRows)}
   
const id = localStorage.getItem('optiUserId')
const token = localStorage.getItem('optiUserToken')

const url = `http://localhost:5000/solve/${id}`
useEffect(()=>{
  
    if(iteration===length){
        setPage(4)
    }
    
 
},[])
const iterateSolve = async ()=>{
    alert(JSON.stringify(solvedArray))
    const shouldAdvance =  await checkTableau(iTableau, solvedArray, index, dimensions, rTableau, setRTableau, setITableau)
    if(!shouldAdvance){
        setPage(3)
        }else{
        alert('issues')
            }
          setIteration(iteration+1)
          setIndex(index+1)
          setPage(2) 

    
        }
    
   

    
    return(
        <>
         <div className='solve-wrapper'>
        <div className="is-wrap">
        <div><p style={{width:'100vw',marginTop:'1cm'}}> Fill in the Simplex Tableau for iteration number: {iteration}</p></div>
        <div className='initial-solve'><IterationTableau/></div>
        <div className='s-button'><button onClick={iterateSolve}>Solve</button>
        <br/>
        </div>
        </div>
        </div>
        </>
    )
}
export default IterationSolve