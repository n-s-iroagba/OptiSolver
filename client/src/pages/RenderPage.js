import React, { useContext,useState } from 'react'
import IterationSolve from './IterationSolve'
import InitialSolve from './InitialSolve'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import IterationSolve2 from './IterationSolve2'
import Response from './Response'

const RenderPage = ()=>{
const {page} = useContext(MatrixContext)

    const ConditionalRender = () => {
        switch (page){
            case 1 : return <InitialSolve/>
            case 2: return <IterationSolve/>
            case 3: return <Response/>
            case 4: return  <IterationSolve2/>
            default : return <InitialSolve/>
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