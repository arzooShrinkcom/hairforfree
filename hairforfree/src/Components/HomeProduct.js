import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product1 from '../assets/img/product-01.webp'
import product2 from '../assets/img/product-02.webp'
import product3 from '../assets/img/product-03.webp'
import product4 from '../assets/img/product-04.webp'
import product5 from '../assets/img/product-05.webp'
import { Rating } from 'react-simple-star-rating'
import { BsHeart } from 'react-icons/bs'


const HomeProduct = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className='container my-5'>
      <h3 className='text-center my-4 heading'>New Arrivals</h3>
      <Carousel responsive={responsive}>
        <div>
          <div className='position-relative'>
            <BsHeart className='icon' />
            <div className='text-center'>
              <img src={product1} />
              <p>Madden by Steve Madden Cale 6</p>
              <Rating initialValue={4} size={15} />
              <h5>€14.52</h5>
            </div>
          </div>
        </div>
        <div>
          <div className='position-relative'>
            <BsHeart className='icon' />
            <div className='text-center'>
              <img src={product2} />
              <p>Madden by Steve Madden Cale 6</p>
              <Rating initialValue={4} size={15} />
              <h5>€14.52</h5>
            </div>
          </div>
        </div>
        <div>
          <div className='position-relative'>
            <BsHeart className='icon' />
            <div className='text-center'>
              <img src={product3} />
              <p>Madden by Steve Madden Cale 6</p>
              <Rating initialValue={4} size={15} />
              <h5>€14.52</h5>
            </div>
          </div>
        </div>
        <div>
          <div className='position-relative'>
            <BsHeart className='icon' />
            <div className='text-center'>
              <img src={product4} />
              <p>Madden by Steve Madden Cale 6</p>
              <Rating initialValue={4} size={15} />
              <h5>€14.52</h5>
            </div>
          </div>
        </div>
        <div>
          <div className='position-relative'>
            <BsHeart className='icon' />
            <div className='text-center'>
              <img src={product5} />
              <p>Madden by Steve Madden Cale 6</p>
              <Rating initialValue={4} size={15} />
              <h5>€14.52</h5>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default HomeProduct
