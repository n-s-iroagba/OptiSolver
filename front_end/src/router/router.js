import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home"
import RenderPage from "../pages/RenderPage";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";

import IterationSolve from "../pages/solve/IterationSolve";




export const router = createBrowserRouter([

{
    path:'/',
    element: <Home/>,
},
{
    path:'/practice',
    element:<RenderPage/>
},
{
    path:'/re',
    element: <IterationSolve/>
},
{
    path:'/dashboard',
    element:<Dashboard/>
},
{
    path:'/login',
    element:<Login/>
}
,
{
    path:'/signup',
    element:<SignUp/>
},
// {
//     path:'/Re',
//     element:
// },
{
path:'/dashboard',
element:<Dashboard/>
},
// {
//     path:'/practice',
//     element:<SignUp/>
// },

])