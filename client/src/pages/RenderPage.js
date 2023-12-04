import React, { useContext} from 'react'
import IterationSolve from './IterationSolve'
import InitialSolve from './InitialSolve'
import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
import IterationSolve2 from './IterationSolve2'
import Response from './Response'
import FirstSolve from './FirstSolve'

const RenderPage = ()=>{
const {page,iteration} = useContext(MatrixContext)

window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  }
    const ConditionalRender = () => {
    
       // if(iteration>1){
       // return<IterationSolve/>
      // }
      // if(iteration==1){
        //<FirstSolve/>
     //  }
        switch (page){
            case 0 : return <InitialSolve/>
            case 1 : return  <FirstSolve/>
            case 2: return <IterationSolve/>
            case 3: return <Response/>
            case 4: return <IterationSolve2/>
            default : return <IterationSolve/>
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