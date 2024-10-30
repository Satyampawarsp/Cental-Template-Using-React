import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="feature-card">
            <div className="feature-icon">
                {icon}
            </div>
            <div className="feature-content">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;