import React from 'react'
import { Carousel } from "react-bootstrap";
import A from './a.jpg'
import './Carousel.css'



const TextCarousel = ()=>{

    return(<>
    
    <div  className='text-carousel'>
    <Carousel controls={false}>
        
    <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    <Carousel.Item>
       <p>I am A BOY</p>
    </Carousel.Item>
    <Carousel.Item>
       <p>I am A BOY</p>
    </Carousel.Item>
    <Carousel.Item>
       <p>I am A BOY</p>
    </Carousel.Item>
    </Carousel>
    </div>
    </>)
}
export default TextCarousel