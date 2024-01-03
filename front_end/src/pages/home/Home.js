import React from 'react'
import HomeCarousel from '../../components/carousel/HomeCarousel'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
    return <>
     <div className='home'>
        <Navbar />
        <HomeCarousel />
        <Footer />
    </div>
    </>
}
export default Home 