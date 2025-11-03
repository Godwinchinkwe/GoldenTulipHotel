import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHeart, FaHandshake } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, from our luxurious accommodations to our world-class service.'
    },
    {
      icon: FaUsers,
      title: 'Hospitality',
      description: 'Our guests are at the heart of everything we do, creating memorable experiences that last a lifetime.'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'We are passionate about delivering exceptional service and creating extraordinary moments for our guests.'
    },
    {
      icon: FaHandshake,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and respect for our guests, employees, and community.'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '500+', label: 'Luxury Rooms' },
    { number: '50,000+', label: 'Happy Guests' },
    { number: '20+', label: 'Awards Won' }
  ];

  return (
    <div className="about">
      {/* <!-- Hero Section --> */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center"
          >
            <h1>About Luxuria Grand Hotel</h1>
            <p>
              Where luxury meets legacy. For over 25 years, we have been setting the standard 
              for exceptional hospitality and creating unforgettable experiences for our guests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* <!-- Story Section --> */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-story-text"
            >
              <h2>Our Story</h2>
              <p>
                Founded in 1998, Luxuria Grand Hotel has been a beacon of luxury hospitality in the heart of New York. 
                What started as a vision to create the ultimate luxury experience has grown into an iconic destination 
                for discerning travelers from around the world.
              </p>
              <p>
                Our commitment to excellence, attention to detail, and passion for hospitality has earned us 
                numerous awards and recognition as one of the finest luxury hotels in the region.
              </p>
              <p>
                Today, we continue to innovate and elevate the guest experience, combining timeless elegance 
                with modern amenities and personalized service that exceeds expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-story-image"
            >
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" 
                alt="Luxuria Grand Hotel" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- Mission & Vision --> */}
      <section className="section mission-vision bg-off-white">
        <div className="container">
          <div className="mission-vision-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mission-card"
            >
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional hospitality experiences that create lasting memories for our guests, 
                while maintaining the highest standards of service, luxury, and comfort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="vision-card"
            >
              <h3>Our Vision</h3>
              <p>
                To be recognized as the world's leading luxury hotel brand, setting new standards 
                in hospitality and creating extraordinary experiences that exceed guest expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- Values Section --> */}
      <section className="section values-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header text-center"
          >
            <h2>Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="value-card"
              >
                <div className="value-icon">
                  <value.icon />
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Stats Section --> */}
      <section className="section stats-section bg-primary">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="stat-item"
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;