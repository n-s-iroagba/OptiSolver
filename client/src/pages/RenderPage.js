import React, { useContext} from 'react'
import IterationSolve from './IterationSolve'
import InitialSolve from './InitialSolve'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import IterationSolve2 from './IterationSolve2'
import Response from './Response'
import SolveEntry from './SolveEntry'
import FirstSolve from './FirstSolve'

const RenderPage = ()=>{
const {page} = useContext(MatrixContext)

    const ConditionalRender = () => {
        switch (page){
            case 0 : return <SolveEntry/>
            case 1 : return <InitialSolve/>
            case 2: return <FirstSolve/>
            case 3: return <Response/>
            case 4: return  <IterationSolve2/>
            default : return <SolveEntry/>
        }
    
    }
  
    return(<>
     {
     ConditionalRender()
     }
    
    </>
    )
}
export default RenderPage