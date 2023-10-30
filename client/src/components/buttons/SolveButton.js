import React, { useContext } from 'react'
import './button.css'
import { MatrixContext } from '../../features/solve_simplex/context/SimplexContext'

const SolveButton = ()=>{
    const {tableau} = useContext(MatrixContext)
return<>
<button onClick={console.log(tableau)}>Solve</button>
</>
}

export default SolveButton