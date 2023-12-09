import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import RenderPage from "../pages/RenderPage";
import Welcome from "../pages/Welcome";
import SolveEntry from "../pages/SolveEntry";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
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
    path:'/welcome',
    element:<Welcome/>
},
{
    path:'/login',
    element:<Login/>
}
,
{
    path:'/signup',
    element:<SignUp/>
}

])