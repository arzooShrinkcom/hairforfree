import React from 'react'
import { BsHandbag, BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { PiVan } from 'react-icons/pi'
import { BsBoxSeam } from 'react-icons/bs'

const MainHead = () => {
    return (
        <>
            <div className='container-fluid topBar1' >
                <div className='border-bottom header-upper row'>
                    <div className='col-9 col-md-9 col-lg-9'>
                        <div className='topBarInfo'>
                            <div className=''><PiVan /> Order before 22:00. shipped today</div>
                            <div className=''><BsBoxSeam /> Free Delivery</div>
                            <div className=''>+35,000 customer rate us with 9.7</div>
                        </div>
                    </div>
                    <div className='col-3 upper-right' >
                        <div className='topBarInfo2'>

                            <div className=''>
                                Advice & inspiratiom
                            </div>
                            <div className=''>
                                Login
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar border-bottom navbar-expand-lg bg-body-tertiary py-4">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Hair For Free</a>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link to='/' className="nav-link" >
                                Home
                            </Link>
                            <li className="nav-item">
                                <Link to='/shop' className="nav-link" >
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" >
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" >
                                New arrival
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" >
                                    Featured Product
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" >
                                    Popular Categories
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to='/shop' className="nav-link" >
                                    Contact
                                </Link>                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 searchBar d-none" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn " type="button"><BsSearch /></button>
                            <button className="btn " type="button"><FiHeart /> </button>
                            <button className="btn " type="button"><BsHandbag /></button>
                        </form>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default MainHead
