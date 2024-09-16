import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Assets/styles/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We provide the best shoes for every occasion. Quality and comfort
            guaranteed.
          </p>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/shipping">Shipping & Returns</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <SocialIcon url="https://facebook.com" bgColor="black" className="icons" />
            <SocialIcon url="https://x.com" bgColor="black" className="icons"/>
            <SocialIcon url="https://instagram.com" bgColor="black" className="icons"/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ShoeStore. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
