import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home"
import RenderPage from "../pages/RenderPage";
import SolveEntry from "../pages/SolveEntry";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";




export const router = createBrowserRouter([

{
    path:'/',
    element: <Home/>,
},
{
    path:'/solve-entry',
    element: <SolveEntry/>
},
{
    path:'/solve',
    element: <RenderPage/>
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

])