import React from 'react'
import { Carousel,CarouselItem } from 'react-bootstrap'
import prof from './prof.jpg'
import './Carousel.css'
const HomeCarousel = ()=>{
    return(<>
    <div className='opaque'></div>
    <div className='image-carousel'>
    <Carousel  controls={false}>
        <CarouselItem>
        <img src={prof} alt ='proffessor Kuye'/>
        <Carousel.Caption>
          <p>ttttttttttttttt fffffffffffffffffffff bbbbbbbbbbbbbbbbbb</p>
          
         
          
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img src={prof} alt ='proffessor Kuye'/>
        <Carousel.Caption>
        <p>ttttttttttttttt fffffffffffffffffffff bbbbbbbbbbbbbbbbbb</p>
          
         
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img src={prof} alt ='proffessor Kuye'/>
        <Carousel.Caption>
        <p>ttttttttttttttt fffffffffffffffffffff bbbbbbbbbbbbbbbbbb</p>
         
         
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
        <img src={prof} alt ='proffessor Kuye'/>
        <Carousel.Caption>
        <p>ttttttttttttttt fffffffffffffffffffff bbbbbbbbbbbbbbbbbb</p>
        </Carousel.Caption>
        </CarouselItem>
    </Carousel>
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