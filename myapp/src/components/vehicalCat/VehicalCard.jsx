import React from 'react';
import './Vehical.css';

const VehicalCard = ({ carImage, title, review, price, 'data-aos': dataAos }) => { // Destructure data-aos
    const rating = parseFloat(review);
    const stars = Array.from({ length: 5 }, (v, i) => (
        <i key={i} className={i < rating ? "bi bi-star-fill" : "bi bi-star"}></i>
    ));

    return (
        <div className="red col-lg-4 mt-5" data-aos={dataAos}> {/* Add data-aos attribute */}
            <div className="card-red h-100">
                <div className="card-header p-0">
                    <img className="d-block w-100" src={carImage} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
                </div>
                <div className="card-body text-center bg-white">
                    <h5>{title}</h5>
                    <p className="text-muted">{review} Review {stars}</p>
                    <h4>{price}/Day</h4>
                </div>
                <div className="card-footer text-center bg-white">
                    <button className="btn btn-danger">Book now</button>
                </div>
            </div>
        </div>
    );
};

export default VehicalCard;
