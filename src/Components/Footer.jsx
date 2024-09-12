import '../App.css';
import { NavLink } from 'react-router-dom';
import BackToTopButton from './BackToTopButton ';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
    
      <div className="footer-container">
      
        <BackToTopButton />
        
      <div className="footer-top">

      <div className="footer-section footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/" activeClassName="active-link">About</NavLink></li>
          <li><NavLink to="/" activeClassName="active-link">Shop</NavLink></li>
          <li><NavLink to="/" activeClassName="active-link">Collections</NavLink></li>
          <li><NavLink to="/" activeClassName="active-link">Blog</NavLink></li>
          <li><NavLink to="/" activeClassName="active-link">Contact Us</NavLink></li>
        </ul>
      </div>
      <div className="footer-section customer-service">
        <h3>Customer Service</h3>
        <ul>
          <li><NavLink to="/faqs" activeClassName="active-link">FAQs</NavLink></li>
          <li><NavLink to="/shipping-returns" activeClassName="active-link">Shipping & Returns</NavLink></li>
          <li><NavLink to="/privacy-policy" activeClassName="active-link">Privacy Policy</NavLink></li>
          <li><NavLink to="/terms-of-service" activeClassName="active-link">Terms of Service</NavLink></li>
        </ul>
      </div>
        <div className="footer-section foot-about">
          <h3>Sparkling with Passion</h3>
          <p>
          At SEJR, we believe that jewelry is more than just a accessory - it's a way to express yourself, tell your story, and treasure life's precious moments. That's why we curate exquisite, high-quality pieces that sparkle with passion and shine with excellence
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} alt="Facebook" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} alt="Instagram" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} alt="YouTube" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faWhatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SEJR. All Rights Reserved.</p>
      </div>
    </div>
    </>
    
  );
};

export default Footer;