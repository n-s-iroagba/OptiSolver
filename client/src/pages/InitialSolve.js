import React, { useEffect, useState } from 'react'

import './pages.css'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import { useContext} from 'react'
import InitialTableau from '../features/solve_simplex/components/InitialTableau'
import { solveSimplex } from '../utils/api'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const InitialSolve = ()=>{
    
    const{tableau,setPage,setSolvedArray} = useContext(MatrixContext)
    const [loading,setLoading] = useState('not-seen')
    const navigate =  useNavigate()
    const [classname,setClassname] = useState('is-wrap')
    const id = localStorage.getItem('optiUserId');
    const url = `http://localhost:5000/solve/${id}`
    const token = localStorage.getItem('optiUserToken')
    useEffect(()=>{
        console.log(token)
       if(!token||token===''){
       
        navigate('/login')

       }
    },[])
   const iterate = async() => {
        setClassname('not-seen')
        setLoading('seen')
        const tabTemp = JSON.stringify(tableau)
        localStorage.setItem('tableau',tabTemp)
        const solutionResponse = await solveSimplex(url,tableau,token)
        if (solutionResponse){
            console.log(typeof solutionResponse.solution)
            console.log(solutionResponse)
            const temp = JSON.stringify(solutionResponse.solution)
            localStorage.setItem('solution',temp)
            const tempLength = solutionResponse.solution.length
            console.log(tempLength)
            setSolvedArray(solutionResponse.solution)
            localStorage.setItem('length',tempLength)
            setLoading('not-seen')
            localStorage.setItem('iteration', 1)
           setPage(1)
        }
    }  
    
    return(
        <>
        <div className='solve-wrapper'>
        <div className={loading}><img className='load-icon' src={require('./loading.gif')} alt='loading'/>
        <p style={{width:'100vw'}}>Solving... Please Be Patient,This May Take A While.</p>
        </div>
        <div className={classname}>
        <div><p style={{width:'100vw',marginTop:'1cm'}}> Fill in the initial Simplex Tableau</p></div>
        <div className='initial-solve'><InitialTableau/></div>
        <br/>
        <Button variant='dark' onClick={iterate}>Solve</Button>
        </div>
        </div>
        </>
    )
}
export default InitialSolve