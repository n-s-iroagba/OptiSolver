// import React, { useContext} from 'react'
// import IterationSolve from './iteration/IterationSolve'
// import InitialSolve from './initial/InitialSolve'
// import { MatrixContext } from '../features/solve_simplex/context/SimplexContext'
// import TIterationSolve from './iteration/TIterationSolve'
// import TResponse from './response/TResponse'
// import Response from './response/Response'
// import FirstSolve from './initial/FirstSolve'
// import Response2 from './response/Response2'
// import TResponse2 from './response/TResponse2'

// const RenderPage = ()=>{
// const {page,iteration} = useContext(MatrixContext)

// window.onbeforeunload = function() {
//     return "Data will be lost if you leave the page, are you sure?";
//   }
//     const ConditionalRender = () => {
//         switch (page){
//             case 0 : return <InitialSolve/>
//             case 1 : return  <FirstSolve/>
//             case 2: return <IterationSolve/>
//             case 3: return <Response/>
//             case 4: return <TIterationSolve/>
//             case 5: return <TResponse/>
//             case 6: return <Response2/>
//             case 7: return <TResponse2/>
           
           

//             default : return <IterationSolve/>
//         }
//     }
  
//     return(<>
//      {
//      ConditionalRender()
//      }
    
//     </>
//     )
// }
// export default RenderPage