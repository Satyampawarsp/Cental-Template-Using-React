import React from 'react';
import './CentalProcess.css';

const CentalCard = (props) => {
  return (
    <div className="col-lg-4" data-aos={props['data-aos']}> {/* Add AOS attribute */}
        <div className="card carder">
            <h4>{props.head}</h4>
            <p className='text-center'>{props.body}</p>
        </div>
    </div>
  );
}

export default CentalCard;
