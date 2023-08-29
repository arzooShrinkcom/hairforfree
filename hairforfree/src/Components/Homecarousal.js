import React from 'react'
import img from '../assets/img/hff-main.png'

function Homecarousal() {
  return (
    <>
<div id="carouselExampleCaptions" className="carousel slide" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='heading'>Back to Life</h5>
        <p>Shop our great welcome back deals to take care of your hair down to the last detail</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='heading'>Back to Life</h5>
        <p>Shop our great welcome back deals to take care of your hair down to the last detail</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Homecarousal