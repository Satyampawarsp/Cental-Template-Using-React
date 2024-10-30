import React, { useEffect } from 'react';
import VehicalCard from './VehicalCard'; // Import card component
import './Vehical.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const VehicalCat = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    const Data = [
        {
            carImage: "/Images/car5.png",
            title: "Tesla Model",
            review: "4.0",
            star: <i className="bi bi-star-fill"></i>,
            price: "$128.00",
        },
        {
            carImage: "/Images/car6.png",
            title: "Tesla Model",
            review: "4.0",
            star: <i className="bi bi-star-fill"></i>,
            price: "$128.00",
        },
        {
            carImage: "/Images/car4.png",
            title: "Tesla Model",
            review: "4.0",
            star: <i className="bi bi-star-fill"></i>,
            price: "$128.00",
        },
    ];

    return (
        <div className='container text-center mt-4 p-4' style={{ maxWidth: '1100px' }}>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className='text-dark fw-bold mt-3'>Vehicle <span className='text-danger fw-bold'>Categories</span></h1>
                    <p className='lead mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ad? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, omnis.
                    </p>
                </div>
            </div>
            <div className="row">
                {Data.map((val, index) => (
                    <VehicalCard
                        key={index} // Add key for each card
                        carImage={val.carImage}
                        title={val.title}
                        review={val.review}
                        price={val.price}
                        data-aos="fade-up" // AOS attribute for animation
                    />
                ))}
            </div>
        </div>
    );
};

export default VehicalCat;
