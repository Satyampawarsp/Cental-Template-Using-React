import React, { useEffect } from 'react';
import BlogCard from './BlogCard';
import './CentalBlog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CentalBlog = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
        });
    }, []);

    const data = [
        {
            image: "/images/blog1.jpg",
            date: "30 Dec 2025",
            logo1: <i className="bi bi-people-fill"></i>,
            logo2: <i className="bi bi-chat-fill"></i>,
            head: "Rental Cars How To Check Driving Fines",
        },
        {
            image: "/images/blog3.jpg",
            date: "30 Dec 2025",
            logo1: <i className="bi bi-people-fill"></i>,
            logo2: <i className="bi bi-chat-fill"></i>,
            head: "Rental Cars How To Check Driving Fines",
        },
        {
            image: "/images/blog2.jpg",
            date: "30 Dec 2025",
            logo1: <i className="bi bi-people-fill"></i>,
            logo2: <i className="bi bi-chat-fill"></i>,
            head: "Rental Cars How To Check Driving Fines",
        },
    ];

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center mt-2">
                    <h1 className='text-dark fw-bolder'>Cental <span className='text-danger'>Blog & News</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet velit ipsum, illum quis qui molestiae, facere sint nostrum omnis ullam quibusdam sit id esse cumque quo iusto consectetur expedita amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, esse!</p>
                </div>
            </div>
            <div className="row">
                {data.map((val, index) => (
                    <BlogCard
                        key={index} // Add a unique key for each card
                        image={val.image}
                        date={val.date}
                        logo1={val.logo1}
                        logo2={val.logo2}
                        head={val.head}
                        data-aos="fade-up" // Specify the AOS animation
                    />
                ))}
            </div>
        </div>
    );
}

export default CentalBlog;
