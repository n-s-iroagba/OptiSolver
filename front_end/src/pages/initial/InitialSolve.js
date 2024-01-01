import React, { useEffect, useState } from 'react'

import '../pages.css'
import { MatrixContext } from '../../features/solve_simplex/context/SimplexContext'
import { useContext} from 'react'
import InitialTableau from '../../features/solve_simplex/components/InitialTableau'
import { solveSimplex } from '../../utils/api'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { solveServerUrl } from '../../utils/data'
import BasicCoefficients from '../../components/tableau/initialTableau/BasicCoefficients'

const InitialSolve = ()=>{
    
    const{tableau,setPage,setSolvedArray,setLength,setIteration} = useContext(MatrixContext)

    const [loading,setLoading] = useState('not-seen')
    const [classname,setClassname] = useState('is-wrap')

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
    
//    const iterate = async() => {
//         setClassname('not-seen')
//         setLoading('seen')
//         const solutionResponse = await solveSimplex(url,tableau,token)
//         if (solutionResponse){
//             const length = solutionResponse.solution.length
//             setSolvedArray(solutionResponse.solution)
//             setLength(length)
//             setIteration(1)
//             setLoading('not-seen')
//             setPage(1)
//         }
//     }  
    
    return(
        <>
        <div className='solve-wrapper'>
        <div className={loading}><img className='load-icon' src={require('../loading.gif')} alt='loading'/>
        <p style={{width:'100vw'}}>Solving... Please Be Patient,This May Take A While.</p>
        </div>
        <div className={classname}>
        <div><p style={{width:'100vw',marginTop:'1cm'}}> Fill in the initial Simplex Tableau</p></div>
        <div className='initial-solve'><InitialTableau/></div>
        {/* <br/>
        <Button variant='dark' onClick={iterate}>Solve</Button> */}
        </div>
        </div>
        </>
    )
}
export default InitialSolve