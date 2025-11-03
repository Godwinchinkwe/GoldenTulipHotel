import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHotel, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { path: '/', label: 'Home' },
      { path: '/rooms', label: 'Rooms & Suites' },
      { path: '/booking', label: 'Book Now' },
      { path: '/about', label: 'About Us' },
      { path: '/contact', label: 'Contact' },
    ],
    services: [
      'Luxury Accommodation',
      'Fine Dining',
      'Spa & Wellness',
      'Event Spaces',
      'Concierge Services',
    ],
  };

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* <-- Company Info --> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="footer-section footer-company"
          >
            <div className="footer-logo">
              <FaHotel className="logo-icon" />
              <span>Luxuria Grand</span>
            </div>
            <p className="footer-description">
              Experience luxury and comfort at its finest. Luxuria Grand Hotel offers 
              unparalleled hospitality in the heart of the city.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-link"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* <!-- Quick Links --> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-section"
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* <!-- Services --> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-section"
          >
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* <!-- Contact Info --> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="footer-section"
          >
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Luxury Avenue, Downtown, New York</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span><a href="tel:+1234567890">+1 (234) 567-890</a></span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span><a href="mailto:info@luxuriagrandhotel.com">info@luxuriagrandhotel.com</a></span>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <span>24/7 Customer Service</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Luxuria Grand Hotel. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;