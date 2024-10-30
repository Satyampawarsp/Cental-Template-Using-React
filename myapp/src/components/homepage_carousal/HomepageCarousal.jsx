import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage_carousel.css'; // For custom styles

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ backgroundImage: 'url(/Images/car1.jpg)', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className="carousel-content">
            <div className="form">
              <h2 className='text-center mb-3'>CONTINUE CAR RESERVATION</h2>
              <form>
                <input type="Text" className="form-control mb-2" placeholder="Name"/> 
                <input type="email" className="form-control mb-2" placeholder="Email" />
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="branding d-none d-md-block">
              <h1 className='fw-bold'>Get 15% off your</h1>
              <h1 className='fw-bold'>rental Plan your trip</h1>
              <h6 className='fw-bold'>Treat yourself in USA</h6>
             
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{ backgroundImage: 'url(/Images/car2.jpg)' }}>
          <div className="carousel-content">
            <div className="form">
              <h2>CONTINUE CAR RESERVATION</h2>
              <form>
                <input type="text" className="form-control mb-2 bg-light" placeholder="Name" />
                <input type="email" className="form-control mb-2 bg-light" placeholder="Email" />
                <button type="submit" className="btn btn-danger">click here</button>
              </form>
            </div>
            <div className="branding d-none d-md-block">
            <h1 className='fw-bold'>Get 15% off your</h1>
            <h1 className='fw-bold'>rental Plan your trip</h1>
            <h6 className='fw-bold'>Treat yourself in USA</h6>
            </div>
          </div>
        </div>
      </div>
      <button className="custom-carousel-control-prev d-none d-md-block" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <i class="bi bi-skip-start-circle-fill"></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="custom-carousel-control-next d-none d-md-block" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <i className="bi bi-skip-end-circle-fill"></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div> 
  );
};

export default Carousel;