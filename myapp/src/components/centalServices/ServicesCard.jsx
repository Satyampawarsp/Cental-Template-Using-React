import React from 'react';

const ServicesCard = (props) => {
    return (
        <div className="col-lg-4 mt-3" data-aos={props.aosType || 'fade-up'}> {/* AOS effect applied here */}
            <div className="card rounded">
                <div className="card-header">
                    <h1 className='fs-X-large fw-bolder mt-2 mb-0'>{props.png}</h1>
                </div>
                <div className="card-body">
                    <h3 className='fw-bold m-0'>{props.head}</h3>
                </div>
                <div className="card-footer">
                    <p className='text-center m-2'>{props.para}</p>
                </div>
            </div>
        </div>
    );
}

export default ServicesCard;
