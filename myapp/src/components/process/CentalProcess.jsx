import React, { useEffect } from 'react';
import './CentalProcess.css';
import CentalCard from './CentalCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const CentalProcess = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    const data = [
        {
            head: "Come In Contact",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!",
        },
        {
            head: "Choose A Car",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!",
        },
        {
            head: "Enjoy Driving",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!",
        },
    ];

    return (
        <div className="container-fluid imger">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className='fw-bolder text-info mt-4 mb-0'>Cental <span className='text-danger'>Process</span></h1>
                    <p className='text-center text-light p-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, rerum. sit amet consectetur adipisicing elit. Ad maiores quidem iste culpa quibusdam voluptatem facere hic magni dicta praesentium.
                    </p>
                </div>
            </div>
            <div className="row">
                {
                    data.map((val, index) => (
                        <CentalCard
                            key={index} // Add key for each card
                            head={val.head}
                            body={val.body}
                            data-aos="fade-up" // AOS attribute for animation
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default CentalProcess;
