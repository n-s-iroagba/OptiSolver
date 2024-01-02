import React, { useState, useEffect } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import ojm from './ojm.jpeg';
import nnamdi from './profile pic.jpg';
import './Carousel.css';

const HomeCarousel = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='opaque'></div>
      <div className={`carousel ${isSmallScreen ? 'small-screen' : 'large-screen'}`}>
        <Carousel controls={false} fade={!isSmallScreen}>
          <CarouselItem>
            <img src={ojm} alt='jerimiah' />
            <Carousel.Caption>
              <span>Optimize Your Way to Success with our Simplex Solver App</span>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img src={nnamdi} alt='nnamdi' />
            <Carousel.Caption>
              <span>Effortless Linear Programming Solutions at Your Fingertips</span>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img src={ojm} alt='ojmfessor Kuye' />
            <Carousel.Caption>
              <span>Solve Complex Problems with Simplicity: Try Our Simplex App Today </span>
            </Carousel.Caption>
          </CarouselItem>
          <CarouselItem>
            <img src={ojm} alt='ojmfessor Kuye' />
            <Carousel.Caption>
              <span>Unlock the Power of Linear Programming with our Intuitive Simplex Solver</span>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
      </div>
    </>
  );
};


  
export default HomeCarousel