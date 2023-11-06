import React from 'react'
import HomeCarousel from '../components/Carousel/HomeCarousel'
import './pages.css'
import Footer from '../components/footer/Footer'
import Title from '../components/title/Title'

const Home = () => {
    return <>
     <div className='home'>
        <Title />
        <HomeCarousel />
        <Footer />
    </div>
    </>
}
export default Home 