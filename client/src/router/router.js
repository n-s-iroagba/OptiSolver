import { createBrowserRouter } from "react-router-dom";
//import Home from "../pages/Home";
import InitialSolve from "../pages/InitialSolve";
import IterationSolve from "../pages/IterationSolve";
import RenderPage from "../pages/RenderPage";
/*
import Response from "../pages/Response";

import Welcome from "../pages/Welcome";
import SolveEntry from "../pages/SolveEntry";
*/


export const router = createBrowserRouter([
//{
//    path:'/',
//    element:<Home/>
//},
{
    path:'/',
    element: <InitialSolve/>,
},
{
    path:'/solve',
    element: <RenderPage/>
},
/*{
    path: '/response',
    element:<Response/>
},

{
    path:'/welcome',
    element:<Welcome/>
},
{
    path:'/entry-solve',
    element:<SolveEntry/>
},
{
    path: 'start-solve',
    element:<InitialSolve/>
}
*/
])