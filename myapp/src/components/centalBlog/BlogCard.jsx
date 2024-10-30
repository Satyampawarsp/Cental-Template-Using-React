import React from 'react';
import './CentalBlog.css';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    return (
        <div className="col-lg-4 mt-5" data-aos={props['data-aos']}> {/* Add AOS attribute */}
            <div className="Card mt-3">
                <div className="card-header imager">
                    <img src={props.image} alt="image1" />
                </div>

                <div className="card-body body1">
                    <h6 className="logo-container">
                        <span className="logo1 text-danger fs-6">
                            {props.logo1}<span className='text-dark fs-5'>  Martin.C</span>
                        </span>
                        <span className="logo2 text-danger fs-6">
                            {props.logo2} <span className='text-dark fs-5'> Comment</span>
                        </span>
                    </h6>

                    <h3 className='fs-3'>{props.head}</h3>
                </div>

                <div className="card-footer footer1">
                    <p className='text-left fs-6'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis ea dolor totam non. Recusandae at perferendis eius laboriosam. Laudantium, eius.
                    </p>
                    <Link to="/" className="text-danger">
                        <h5>Read More <span><i className="bi bi-arrow-right"></i></span></h5>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
