import React, { Component } from 'react'
import HomepageCarousel from '../../components/homepage_carousal/HomepageCarousal'
import CentalAbout from '../../components/centralAbout/CentralAbout'
import CentalFeatures from '../../components/feature/CentralFeatures'
import CentralAbout2 from '../../components/crntralAbout2/CentralAbout2'
import CentalServices from '../../components/centalServices/CentalServices'
import VehicalCat from '../../components/vehicalCat/VehicalCat'
import CentalProcess from '../../components/process/CentalProcess'
import CentalBlog from '../../components/centalBlog/CentalBlog'
import CentalBackground from '../../components/centalBackground/CentalBackground'
import CentalProfile from '../../components/centalProfile/CentalProfile'

import './Home.css'




export default class Home extends Component {
  render() {
    return (
      <div>
        <HomepageCarousel/>
        <CentalFeatures/>
        <CentalAbout/>
        <CentralAbout2/>
        <CentalServices/>
        <VehicalCat/>
        <CentalProcess/>
        <CentalBlog/>
        <CentalBackground/>
        <CentalProfile/>
        
        
     
      </div>
    )
  }
}
