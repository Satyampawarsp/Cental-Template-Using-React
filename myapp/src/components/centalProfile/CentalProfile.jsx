import React from 'react';
import './CentalProfile.css';
import ProfileCard from './ProfileCard';

const CentalProfile = () => {
  const data = [
    {
      image: "/Images/person1.jpg",
      h1: "MARTIN DOE",
      h2: "Profession",
      facebook: <i className="bi bi-facebook"></i>,
      twitter: <i className="bi bi-twitter"></i>,
      insta: <i className="bi bi-instagram"></i>,
      linkdin: <i className="bi bi-linkedin"></i>,
    },
    {
      image: "/Images/person2.jpg",
      h1: "MARTIN DOE",
      h2: "Profession",
      facebook: <i className="bi bi-facebook"></i>,
      twitter: <i className="bi bi-twitter"></i>,
      insta: <i className="bi bi-instagram"></i>,
      linkdin: <i className="bi bi-linkedin"></i>,
    },
    {
      image: "/Images/person3.jpg",
      h1: "MARTIN DOE",
      h2: "Profession",
      facebook: <i className="bi bi-facebook"></i>,
      twitter: <i className="bi bi-twitter"></i>,
      insta: <i className="bi bi-instagram"></i>,
      linkdin: <i className="bi bi-linkedin"></i>,
    },
    {
      image: "/Images/person4.jpg",
      h1: "MARTIN DOE",
      h2: "Profession",
      facebook: <i className="bi bi-facebook"></i>,
      twitter: <i className="bi bi-twitter"></i>,
      insta: <i className="bi bi-instagram"></i>,
      linkdin: <i className="bi bi-linkedin"></i>,
    }
  ];

  // Array of AOS animations for each card
  const aosAnimations = ['fade-right', 'fade-up', 'fade-left', 'fade-down'];

  return (
    <div className="container profile mt-5">
      <div className="row">
        <div className="col-g-12">
          <h1 className='text-center first fw-bold'>Customer <span className='text-danger'>Support</span> Center</h1>
          <p className='text-center'>Lorem ipsum  asperiores nulla vero harum laudantium cum fugit a ratione ullam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolor architecto quidem deserunt error reiciendis nam, earum mollitia non assumenda?</p>
        </div>
      </div>
      <div className="row">
        {
          data.map((val, index) => (
            <ProfileCard
              key={index}
              image={val.image}
              h1={val.h1}
              h2={val.h2}
              facebook={val.facebook}
              twitter={val.twitter}
              insta={val.insta}
              linkdin={val.linkdin}
              aosAnimation={aosAnimations[index % aosAnimations.length]} // Assign AOS animation based on index
            />
          ))
        }
      </div>
    </div>
  );
}

export default CentalProfile;
