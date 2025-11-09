import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHotel } from 'react-icons/fa';
import './Header.css';
import logo from "../../Assets/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/rooms', label: 'Rooms' },
    { path: '/booking', label: 'Booking' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path || 
           (path === '/' && location.pathname === '/') ||
           (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`header ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="container">
          <div className="header-content">
            <Link onClick={scrollToTop} to="/" className="logo">
              {/* <FaHotel className="logo-icon" /> */}
              <img src={logo} className='logosize' alt="" />
              {/* <span className="logo-text">Golden Tulip</span> */}
            </Link>

            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
              <ul className="nav-list">
                {navItems.map((item) => (
                  <li key={item.path} className="nav-item">
                    <Link 
                      to={item.path}
                      className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <Link onClick={scrollToTop} to="/booking" className="btn btn-primary">
                Book Now
              </Link>
              
              <button
                className="nav-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="nav-overlay"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;