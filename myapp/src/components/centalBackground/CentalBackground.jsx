import React from 'react';
import './CentalBackground.css';

const CentalBackground = () => {
  return (
    <div className="container-fluid banner bg-light mt-5">
      <div className="container pb-5">
        <div className="banner-item rounded">
          {/* Background Image */}
          <img src="/Images/background.jpg" className="img-fluid rounded w-100" alt="background" />
          
          {/* Black Overlay */}
          <div className="overlay"></div>
          
          {/* Banner Content */}
          <div className="banner-content">
            <h2 className="heading1 text-danger fs-1 ">Rent Your Car</h2>
            <h1 className="heading2 text-white fs-1 fw-bold">Interested in Renting?</h1>
            <p className="heading3 text-white">Don't hesitate and send us a message.</p>
            <div className="banner-btn">
              <a href="/" className="btn btn-danger rounded-pill py-3 px-4 px-md-5 me-2">WhatsApp</a>
              <a href="/" className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentalBackground;
