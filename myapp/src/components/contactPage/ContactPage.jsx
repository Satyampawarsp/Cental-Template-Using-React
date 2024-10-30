import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="container contact-page">
            <div className="row">
                {/* Left Side - Branch Information */}
                <div className="col-md-3 branch-info">
                    <div className="branch-card">
                        <h4>Our Branch 01</h4>
                        <p>123 Street, New York, USA</p>
                        <p>Telephone: (+012) 3456 7890</p>
                    </div>
                    <div className="branch-card">
                        <h4>Our Branch 02</h4>
                        <p>456 Avenue, Los Angeles, USA</p>
                        <p>Telephone: (+012) 3456 7891</p>
                    </div>
                    <div className="branch-card">
                        <h4>Our Branch 03</h4>
                        <p>789 Boulevard, Chicago, USA</p>
                        <p>Telephone: (+012) 3456 7892</p>
                    </div>
                </div>

                {/* Center - Social Media Icons (Vertical) */}
                <div className="col-md-2 text-center social-icons">
                    <h4>Follow Us</h4>
                    <div className="icons">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-twitter"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div className="col-md-7">
                    <h3>Send Your Message</h3>
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Surname" required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Contact" required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Project" required />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>

            {/* Google Map */}
            <div className="row mt-5">
                <div className="col-12">
                    <h3>Our Location</h3>
                    <div className="map-container">
                        <iframe
                            title="New York Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.874474996471!2d-74.0060156845943!3d40.71277527933073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316b3f4b59%3A0x7588e97fb42e07aa!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1612325853082!5m2!1sen!2sin"
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
