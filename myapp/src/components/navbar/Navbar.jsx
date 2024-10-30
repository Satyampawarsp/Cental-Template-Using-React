import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0 bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink to="/" className="navbar-brand p-0">
            <h1 className="display-6 text-danger fw-bold">
              <i className="bi bi-car-front"></i>Cental
            </h1>
          </NavLink>
          <button
            className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isOpen}
          >
            <i className="bi bi-menu-button"></i>
          </button>
          <div className={`navbar-collapse collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto py-0">
              <li className="nav-item mx-4">
                <NavLink to="/" className="nav-link fw-bold active" onClick={closeNavbar}>Home</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to="/About" className="nav-link fw-semibold" onClick={closeNavbar}>About Us</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to="/services" className="nav-link fw-semibold" onClick={closeNavbar}>Services</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to="/contact" className="nav-link fw-semibold" onClick={closeNavbar}>Contact Us</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to="/carrier" className="nav-link fw-semibold" onClick={closeNavbar}>Carrier</NavLink>
              </li>
            </ul>
            <NavLink className="btn btn-info rounded-pill py-2 px-4 fw-semibold" onClick={closeNavbar}>
              Get Started
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
