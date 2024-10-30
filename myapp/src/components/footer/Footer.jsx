import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid mt-5 p-2">
            <div className="row">
                <div className="col-lg-12 p-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1 className='text-info text-left mt-3 fs-4'>About us</h1>
                            <p className='text-light text-left'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis a nostrum nulla recusandae magnam quis voluptate, neque natus hic!
                            </p>
                           
                            <div class="input-container">
                                <input placeholder="email" type="text" class="input" />
                                <span>@gmail.com</span>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <h1 className='text-info text-left mt-3 fs-4'>Quick Links</h1>
                            <ul className='unorderd text-light fs-5'>
                                <li>About</li>
                                <li>Car</li>
                                <li>Car Types</li>
                                <li>Team</li>
                                <li> Contact Us</li>
                                <li> Terms & Condition</li>
                            </ul>
                        </div>

                        <div className="col-lg-3">
                            <h1 className='text-info text-left mt-3 fs-4'>Business Hours</h1>
                            <div className='text-light'>
                                <p className='text-left text-secondary fs-5 mt-0 '>Mon - Friday:</p>
                                <p className='text-left mt-0 '>09.00 am to 07.00 pm</p>
                            </div>
                            <div className='text-light'>
                                <p className='text-left text-secondary fs-5 mt-0 '>Saturday:</p>
                                <p className='text-left mt-0 '>10.00 am to 05.00 pm</p>
                            </div>
                            <div className='text-light'>
                                <p className='text-left text-secondary fs-5 mt-0 '>Vacation:</p>
                                <p className='text-left mt-0 '>All Sunday is our vacation</p>
                            </div>

                        </div>

                        <div className="col-lg-3">
                            <h1 className='text-info text-left mt-3 fs-4'>Contact Info</h1>
                            <div className='text-light '>
                                <h6 className='text-secondary mt-3 text-left'> <span> <i class="bi bi-geo"></i></span> 123 Street,New York,USA</h6>
                                <h6 className='text-secondary mt-3 text-left'><span> <i class="bi bi-envelope"></i></span> Cental@gmail.com</h6>
                                <h6 className='text-secondary mt-3 text-left'><span> <i class="bi bi-telephone"></i></span> +098765432</h6>
                                <h6 className='text-secondary mt-3 text-left'><span> <i class="bi bi-clipboard-pulse"></i></span> +909876543</h6>
                            </div>
                            <div className='d-flex gap-3 text-info mt-5'>
                                <h1><i class="bi bi-facebook"></i></h1>
                                <h1><i class="bi bi-twitter"></i></h1>
                                <h1><i class="bi bi-instagram"></i></h1>
                                <h1><i class="bi bi-linkedin"></i></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='text-light fw-bold' />
                <div class="container-fluid copyright py-4">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-md-6 text-center text-md-start mb-md-0">
                        <span class=" text-secondary"><a href="#" class="border-bottom text-white"><i class="bi bi-c-circle"></i>  Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div class="col-md-6 text-center  text-secondary">Designed By <a class="border-bottom text-white" href="https://cental.com">HTML Codex</a> Distributed By <a class="border-bottom text-white" href="https://themewagon.com">ThemeWagon</a>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
}

export default Footer;
