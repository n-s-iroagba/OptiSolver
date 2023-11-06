import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import RenderPage from "../pages/RenderPage";
import Welcome from "../pages/Welcome";



export const router = createBrowserRouter([

{
    path:'/',
    element: <Home/>,
},
{
    path:'/solve',
    element: <RenderPage/>
},
{
    path:'/welcome',
    element:<Welcome/>
},

])