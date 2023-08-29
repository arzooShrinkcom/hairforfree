import React from 'react'
import visa from '../assets/img/visa.png'
import paypal from '../assets/img/paypal.png'
import mastercard from '../assets/img/mastercard.png'
import applepay from '../assets/img/ApplePay.jpg'
import footerimg from '../assets/img/payment.webp'



const Footer = () => {
    return (
        <div className='footer'>
            <div className='container-fluid'>
                <footer>
                    <div className='row footerSpace'>
                        <div className='col-md-12'>
                            <a>
                                {/* <img src={""} alt="Logo" /> */}
                                <h3 className='heading'>Hair For Free</h3>
                            </a>
                        </div>
                        <div className='col-6' >
                            <div >
                                <div>
                                    <p>Location: 602, Bhawarkua, Indore</p>
                                    <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt, lorem non dignissim vestibulum, lac
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='row' >
                                <div className='col' >
                                    <li>Delivery</li>
                                    <li>Legal Notice</li>
                                    <li> About us</li>
                                </div>

                                <div className='col' >
                                    <li>Secure payment</li>
                                    <li>Contact us</li>
                                    <li>Sitemap</li>
                                </div>
                                <div className='col' >
                                    <li>Login</li>
                                    <li>My account</li>
                                    <li>Stores</li>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row copyright">
                        <div className='col-md-9'>
                            <p>Copyright © 2023 All Rights Reserved</p>
                        </div>
                        <div className='col-md-3'>
                            <img src={footerimg} className='img-fluid' />
                            <div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
