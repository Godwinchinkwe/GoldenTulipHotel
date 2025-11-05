import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1>Airport Golden Tulip Hotel</h1>
          <p className="tagline">Experience Luxury Like Never Before</p>
          <p>
            Welcome to Luxuria Grand Hotel, where luxury meets comfort in the heart of the city. 
            Experience world-class hospitality with our premium accommodations and exceptional services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-rating"
        >
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span>5.0 Rating (2,847 Reviews)</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-buttons"
        >
          <Link to="/booking" className="btn btn-primary">
            Book Your Stay
          </Link>
          <Link to="/rooms" className="btn btn-outline">
            View Rooms
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;