import React, { useState} from 'react'
import MySpinner from '../../components/spinner/MySpinner'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext } from 'react'
import Tableau from '../../components/tableau/input/Tableau'
import { solveSimplex } from '../../utils/api'
import { Button } from 'react-bootstrap'
import './solve.css'

const InitialSolve = React.memo(() => {

    const { tableau, setPage, setSolvedArray, iTableau, setITableau,setLength,setSolution} = useContext(MatrixContext)

    const [loading, setLoading] = useState('not-seen')
    const [classname, setClassname] = useState('solve-page-wrapper')
    const id = localStorage.getItem('optiUserId');
    const token = localStorage.getItem('optiUserToken')
    const url = `http://localhost:5000/solve/${id}`

    const solve = async () => {
        setClassname('not-seen')
        setLoading('seen')
        const solutionResponse = await solveSimplex(url, tableau, token)
        if (solutionResponse) {
            console.log(solutionResponse)
            const length = solutionResponse.solution.solution.length
            let tempTab = iTableau
            tempTab.crow = tableau.crow
            setITableau(tempTab)
            setSolvedArray(solutionResponse.solution.solution)
            setSolution({ uniqueness: solutionResponse.solution.uniqueness, feasibility: solutionResponse.solution.feasibility, boundedness: solutionResponse.solution.boundedness })
            setLength(length)
            setLoading('not-seen')
            setPage(-3)
        }
    }
    return (
        <>
            <div className='solve-wrapper'>
                <div className={loading}>
                    <MySpinner />
                </div>
                <div className={classname}>
                    <div><p className='solve-writeup' > Fill in the initial Simplex Tableau</p></div>
                    <div className='initial-solve'><Tableau /></div>
                    <br />
                    <div><Button variant='dark' onClick={solve}>Solve</Button></div>
                </div>
            </div>
        </>
    )
})
export default InitialSolve