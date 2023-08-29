import React from 'react'
import shop from '../assets/img/shop-01.jpg'
import { BsHandbag } from 'react-icons/bs'
import { Rating } from 'react-simple-star-rating'


const ShopMain = () => {
    return (
        <div>
            <div className='row' >
                <div className='col-3' >

                    <div>
                        <h4>To Notice</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Brand Name
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Brand Name
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Brand Name
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Brand Name
                            </label>
                        </div>
                    </div>

                    <div>
                        <h4>Hair Type</h4>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Hair Type
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Hair Type
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Hair Type
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label" for="flexCheckChecked">
                                Hair Type
                            </label>
                        </div>
                    </div>

                </div>
                <div className='col-9' >
                    <div className='product-container' >
                        <div className='product-div' >
                            <img src={shop} height="250px" />
                            <div className='row' >
                                <div className='col-8'>
                                    <p>Madden by Steve Madden Cale 6</p>
                                    <Rating initialValue={4} size={15} />
                                    <h5>€14.52</h5>
                                </div>
                                <div className='col-4' ><BsHandbag /></div>
                            </div>
                        </div>
                        <div>
                            <img src={shop} height="250px" />
                            <div className='row' >
                                <div className='col-8'>
                                    <p>Madden by Steve Madden Cale 6</p>
                                    <Rating initialValue={4} size={15} />
                                    <h5>€14.52</h5>
                                </div>
                                <div className='col-4' ><BsHandbag /></div>
                            </div>
                        </div>
                        <div>
                            <img src={shop} height="250px" />
                            <div className='row' >
                                <div className='col-8'>
                                    <p>Madden by Steve Madden Cale 6</p>
                                    <Rating initialValue={4} size={15} />
                                    <h5>€14.52</h5>
                                </div>
                                <div className='col-4' ><BsHandbag /></div>
                            </div>
                        </div>
                        <div>
                            <img src={shop} height="250px" />
                            <div className='row' >
                                <div className='col-8'>
                                    <p>Madden by Steve Madden Cale 6</p>
                                    <Rating initialValue={4} size={15} />
                                    <h5>€14.52</h5>
                                </div>
                                <div className='col-4' ><BsHandbag /></div>
                            </div>
                        </div>
                        <div>
                            <img src={shop} height="250px" />
                            <div className='row' >
                                <div className='col-8'>
                                    <p>Madden by Steve Madden Cale 6</p>
                                    <Rating initialValue={4} size={15} />
                                    <h5>€14.52</h5>
                                </div>
                                <div className='col-4' ><BsHandbag /></div>
                            </div>
                        </div>
                        <div>
                            <img src={shop} height="250px" />
                            <div className='row' >
                                <div className='col-8'>
                                    <p>Madden by Steve Madden Cale 6</p>
                                    <Rating initialValue={4} size={15} />
                                    <h5>€14.52</h5>
                                </div>
                                <div className='col-4' ><BsHandbag /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopMain
