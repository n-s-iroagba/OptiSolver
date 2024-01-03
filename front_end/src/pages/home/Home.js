import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/NavBar';
import WriteUp from '../../components/writeup/WriteUp';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <WriteUp/>
      
      <Footer />
    </div>
  );
};

export default Home;
