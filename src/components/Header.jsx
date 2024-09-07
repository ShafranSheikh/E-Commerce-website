import React, { useState } from 'react';
import '../components/Assets/styles/header.css';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMenuToggle = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2><span>S</span>HAFRAN <span>S</span>HOES</h2>
            </div>
            <ul className={isMobile ? "navbar-links-mobile" : "navbar-links"} onClick={() => setIsMobile(false)}>
                <li><a href="#home">Home</a></li>
                <li><a href="#mens">Mens</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* Show Account link in mobile view */}
                {isMobile && (
                    <li><a href="#account">Account</a></li>
                )}
            </ul>
            {/* User icon only visible in desktop view */}
            <div className="user-icon">
                <a href="#account">
                    <i className="fas fa-user-circle"></i>
                </a>
            </div>
            <button className="mobile-menu-icon" onClick={handleMenuToggle}>
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    );
};

export default Header;
