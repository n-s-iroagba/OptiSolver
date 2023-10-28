import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import InitialSolve from "../pages/InitialSolve";

import Response from "../pages/Response";
import IterationSolve from "../pages/IterationSolve";
import Welcome from "../pages/Welcome";
import SolveEntry from "../pages/SolveEntry";



export const router = createBrowserRouter([{
    path:'/',
    element:<Home/>
},
{
    path:'/input',
    element: <InitialSolve/>,
},
{
    path: '/response',
    element:<Response/>
},
{
    path:'/iterate',
    element: <IterationSolve/>
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

])