import React, { useEffect, useState } from 'react'

import '../pages.css'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext} from 'react'
import InitialTableau from '../../components/tableau/solution/InitialTableau'
import { solveSimplex } from '../../utils/api'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { solveServerUrl } from '../../utils/data'
import './solve.css'


const InitialSolve = ()=>{
    
    const{tableau,setPage,setSolvedArray,setLength,setIteration} = useContext(MatrixContext)

    const [loading,setLoading] = useState('not-seen')
    const [classname,setClassname] = useState('solve-page-wrapper')

    const navigate =  useNavigate()
    
    const id = localStorage.getItem('optiUserId');
    const token = localStorage.getItem('optiUserToken')

    const url = `http://localhost:5000/solve/${id}`

//     useEffect(()=>{

//        if(!token||token===''){
//        alert('kindly login to access optiSolver')
//         navigate('/login')
//        }

//     },[])
    
   const solve = async() => {
    console.log(tableau)
        // setClassname('not-seen')
        // setLoading('seen')
        // const solutionResponse = await solveSimplex(solveServerUrl,tableau,token)
        // if (solutionResponse){
        //     const length = solutionResponse.solution.length
        //     setSolvedArray(solutionResponse.solution)
        //     setLength(length)
        //     setIteration(1)
        //     setLoading('not-seen')
        //     setPage(1)
        // }
    }  
    
    return(
        <>
        <div className='solve-wrapper'>
        <div className={loading}><img className='load-icon' src={require('../loading.gif')} alt='loading'/>
         <p>Solving... Please Be Patient,This May Take A While.</p>
        </div>
        <div className={classname}>
        <div><p className='solve-writeup' > Fill in the initial Simplex Tableau</p></div>
        <div className='initial-solve'><InitialTableau/></div>
        <br/>
        <div><Button variant='dark' onClick={solve}>Solve</Button></div>
        </div>
        </div>
        </>
    )
}
export default InitialSolve