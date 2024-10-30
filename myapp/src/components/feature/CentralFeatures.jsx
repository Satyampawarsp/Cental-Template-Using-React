import React, { useEffect } from 'react';
import FeatureCard from './FeatureCard';
import './CentralFeatures.css';  // Import the CSS file
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const CentalFeatures = () => {
    const features = [
        { icon: <i className="bi bi-trophy"></i>, title: 'First Class Services', description: 'Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing elit.' },
        { icon: <i className="bi bi-sign-intersection-y-fill"></i>, title: '24/7 Road Assistance', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing ' },
        { icon: <i className="bi bi-tags"></i>, title: 'Quality at Minimum', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing ' },
        { icon: <i className="bi bi-geo-fill"></i>, title: 'Free Pick-Up & Drop-Off', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing ' }
    ];

    useEffect(() => {
        AOS.init({
            duration: 3000,  // Animation duration
            once: true,      // Animation happens only once when scrolling
        });
    }, []);

    return (
        <div className="container-fluid-1 m-4">
            <div className="heading text-center pt-5" data-aos="fade-down">
                <h1>Cental <span className='text-danger'>Features</span></h1>
                <p className='mb-0 mt-2 fw-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci quas quisquam.</p>
                <p className='mb-0  fw-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque dicta ea commodi voluptate exercitationem perspiciatis magnam modi cupiditate?</p>
            </div>

            <div className="cental-features">
               
                <div className="feature-column" data-aos="fade-right">
                    {features.slice(0, 2).map((feature, index) => (
                        <FeatureCard key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description} />
                    ))}
                </div>

               
                <div className="feature-image d-none d-lg-block" data-aos="zoom-in">
                    <img src="/images/car3.png" alt="Central Car" className="img-fluid" />
                </div>

            
                <div className="feature-column" data-aos="fade-left">
                    {features.slice(2, 4).map((feature, index) => (
                        <FeatureCard key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CentalFeatures;
