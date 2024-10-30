import React from 'react'
import'./Hero.css'

const Hero = () => {
  return (
   <div className="container-fluid ">
    <div className="row">
      <div className="col-lg-6 information d-none d-md-block">
      <i class="bi bi-geo-alt-fill"><span className='information-text'>Pune ,Maharashtra</span></i>
      <i class="bi bi-telephone-fill"><span className='information-text'>+91934567890</span></i>
      <i class="bi bi-envelope-open-fill"><span className='information-text'>satyampawar1733@gmail.com</span></i>
      </div>
      <div className="col-lg-6 information_png d-flex justify-content-center ">
      <i class="bi bi-facebook"></i>
      <i class="bi bi-twitter"></i>
      <i class="bi bi-instagram"></i>
      <i class="bi bi-linkedin"></i>
      </div>
    </div>
   </div>
  )
}

export default Hero

 