import React,{useEffect} from 'react'
import './Dashboard.css'
import Title from '../../components/title/Title'
// import { useNavigate } from 'react-router-dom'
// import { isAuthorized } from '../../utils/auth'
import DashboardNav from '../../components/dashboardnav/DashboardNav'
import Footer from '../../components/footer/Footer'
const Dashboard = () => {
    const name = localStorage.getItem('optiUsername')
// useEffect(()=>{
//     const authorised =isAuthorized()
//     console.log(authorised)
//     if (authorised===false){
//         navigate('/login')
//     }
// },[])
return <> 
    <div className='dashboard-page'>
    <Title/>
    <h1 style={{color:'white'}}>Welcome {name}</h1>
    <DashboardNav/>
    <Footer/>
    </div> 
    </>
}
export default Dashboard