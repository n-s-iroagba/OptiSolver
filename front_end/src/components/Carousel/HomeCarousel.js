import React from 'react'
import { Carousel,CarouselItem } from 'react-bootstrap'
import ojm from './ojm.jpeg'
import nnamdi from './profile pic.jpg'
import './Carousel.css'
const HomeCarousel = ()=>{
    return(<>
    <div className='opaque'></div>
    <div className='image-carousel'>
      <div className='large-screen'>
    <Carousel  controls={false} fade>
        <CarouselItem>
        <img src={ojm} alt ='jerimiah'/>
        <Carousel.Caption>
          <span>Optimize Your Way to Success with our Simplex Solver App</span>
          
         
          
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img src={nnamdi} alt ='nnamdi'/>
        <Carousel.Caption>
        <span>Effortless Linear Programming Solutions at Your Fingertips</span>
          
         
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img src={ojm} alt ='ojmfessor Kuye'/>
        <Carousel.Caption>
        <span>Solve Complex Problems with Simplicity: Try Our Simplex App Today </span>
         
         
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img src={ojm} alt ='ojmfessor Kuye'/>
        <Carousel.Caption>
        <span>Unlock the Power of Linear Programming with our Intuitive Simplex Solver</span>
        </Carousel.Caption>
        </CarouselItem>
    </Carousel>
    </div>
    <div className='small-screen'>
    <Carousel  controls={false} >
    <CarouselItem>
        <img src={ojm} alt ='ojmfessor Kuye'/>
        <Carousel.Caption>
          <span>Optimize Your Way to Success with our Simplex Solver App</span>
          
         
          
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img src={nnamdi} alt ='nnamdi'/>
        <Carousel.Caption>
        <span>Effortless Linear Programming Solutions at Your Fingertips</span>
          
         
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img src={ojm} alt ='ojmfessor Kuye'/>
        <Carousel.Caption>
        <span>Solve Complex Problems with Simplicity: Try Our Simplex App Today </span>
         
         
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img src={ojm} alt ='ojmfessor Kuye'/>
        <Carousel.Caption>
        <span>Unlock the Power of Linear Programming with our Intuitive Simplex Solver</span>
        </Carousel.Caption>
        </CarouselItem>
    </Carousel>
    </div>
    <p className='text'>Transforming the traditional approach to teaching chemical engineering through the integration of technology. </p>
    <div className='aspects'>
    <div className='chE'>Chemical Engineering</div>
    <div className='linprog'>Linear Programming</div>
    <div className = 'simplex'>Simplex Method</div>
    </div>
    </div>
    </>)
}
export default HomeCarousel