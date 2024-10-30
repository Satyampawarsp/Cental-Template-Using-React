import React, { useEffect } from 'react';
import ServicesCard from './ServicesCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CentalServices = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const Data = [{
        png: <i className="bi bi-telephone-fill"></i>,
        head: "Phone Reservation",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto"
    },
    {
        png: <i className="bi bi-credit-card-fill"></i>,
        head: "Special Rates",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto"
    },
    {
        png: <i className="bi bi-signpost-2-fill"></i>,
        head: "One Way Rental",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto"
    },
    {
        png: <i className="bi bi-umbrella-fill"></i>,
        head: "Life Insurance",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto"
    },
    {
        png: <i className="bi bi-building-fill"></i>,
        head: "City to City",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto"
    },
    {
        png: <i className="bi bi-car-front-fill"></i>,
        head: "Free Rides",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto"
    }];

    return (
        <div className="container">
            <div className="row">
                <div className='col-lg-12 text-center mt-5'>
                    <h1 className='fw-bolder text-dark'>Cental<span className='fw-bolder text-danger'> Services</span></h1>
                    <p className='text-center lead mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
                </div>
            </div>
            <div className="row">
                {
                    Data.map((val, index) => (
                        <ServicesCard
                            key={index}
                            png={val.png}
                            head={val.head}
                            para={val.para}
                            aosType="fade-up" // Pass AOS effect type here
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default CentalServices;
