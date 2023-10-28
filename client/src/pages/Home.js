import React from 'react'
import HomeCarousel from '../components/Carousel/HomeCarousel'
import LoginComponent from '../components/loginComponent/LoginComponent'
import './Home.css'
import Title from '../components/title/Title'
import Logo from '../components/title/Logo'
import Footer from '../components/footer/Footer'

const Home = ()=>{
    return <>
   
 <div><Logo/></div>
 <LoginComponent/>
    <HomeCarousel/>
    <div className='home-footer'><Footer/></div>
    </>
}
export default Home 