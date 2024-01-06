import React, { useContext} from 'react'
import { MatrixContext } from '../context/SimplexContext';
import Entry from './entry/Entry';
import InitialSolve from './solve/InitialSolve'
import IterationSolve from './solve/IterationSolve';
import FirstSolve from './solve/FirstSolve';
import FResponseSolve from './solve/FResponseSolve';



const RenderPage = ()=>{
const {page,iteration} = useContext(MatrixContext)

window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  }
    const ConditionalRender = () => {
        switch (page){
            case 0 : return <Entry/>
            case 1 : return <InitialSolve/>
            case 2 : return <FirstSolve/>
            case 3 : return <FResponseSolve/>
            case 4 : return <IterationSolve/>
            case 5 : return <FResponseSolve/>
            default : return  <Entry/>
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