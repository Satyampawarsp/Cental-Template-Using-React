import React from 'react';
import './CentalProfile.css';

const ProfileCard = (props) => {
  return (
    <div className="col-md-6 col-lg-6 col-xl-3 mt-5">
      <div className="team-item p-4 pt-0" data-aos={props.aosAnimation}> {/* Use aosAnimation prop here */}
        <div className="team-img">
          <img src={props.image} className="img-fluid rounded w-100" alt="Image" />
        </div>
        <div className="team-content pt-4">
          <h4>{props.h1}</h4>
          <p>{props.h2}</p>
          <div className="team-icon">
            <h5>{props.facebook}</h5>
            <h5>{props.twitter}</h5>
            <h5>{props.insta}</h5>
            <h5>{props.linkdin}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
