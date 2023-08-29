import React from 'react'
import banner1 from '../assets/img/banner-01.png'
import banner2 from '../assets/img/banner-02.png'
import banner3 from '../assets/img/banner-03.png'
import banner4 from '../assets/img/banner-04.png'


const HomeBanner = () => {
  return (
    <div className='container my-5'>
        <h2 className='text-center my-4 heading'>In The Spotlight</h2>
     <div className='row'>
            <div  className='col-md-3 col-lg-3 col-xl-3'>
              <div  className='col-md-12 col-lg-12 col-xl-12'>
                <img src={banner1} className='img-fluid'/>
              </div>
            </div>
            <div  className='col-md-3 col-lg-3 col-xl-3'>
              <div  className='col-md-12 col-lg-12 col-xl-12'>
                <img src={banner2} className='img-fluid'/>
              </div>
            </div>
            <div  className='col-md-3 col-lg-3 col-xl-3'>
              <div  className='col-md-12 col-lg-12 col-xl-12'>
                <img src={banner3} className='img-fluid'/>
              </div>
            </div>
            <div  className='col-md-3 col-lg-3 col-xl-3'>
              <div  className='col-md-12 col-lg-12 col-xl-12'>
                <img src={banner4} className='img-fluid'/>
              </div>
            </div>
     </div>
    </div>
  )
}

export default HomeBanner
