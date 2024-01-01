import React,{useEffect} from 'react'
import './Dashboard.css'

// import createClass from 'create-react-class'
// import { useNavigate } from 'react-router-dom'
// import { isAuthorized } from '../../utils/auth'
import DashboardNav from '../../components/dashboardnav/DashboardNav'
const Dashboard = () => {
    const name = localStorage.getItem('optiusername')
// useEffect(()=>{
//     const authorised =isAuthorized()
//     console.log(authorised)
//     if (authorised===false){
//         navigate('/login')
//     }
// },[])
return <> 
    <div className='dashboard-page'>
    <DashboardNav/>
    </div> 
    </>
}
export default Dashboard