import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSwimmingPool, FaWifi, FaParking, FaUtensils, FaDumbbell, FaConciergeBell } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import Hero from '../../components/Hero/Hero';
import RoomCard from '../../components/RoomCard/RoomCard';
import GalleryPreview from '../../components/GalleryPreview/GalleryPreview';
import './Home.css';

const Home = () => {
  const amenities = [
    { icon: FaSwimmingPool, title: 'Swimming Pool', description: 'Olympic-size heated pool' },
    { icon: FaWifi, title: 'Free WiFi', description: 'High-speed internet access' },
    { icon: FaParking, title: 'Free Parking', description: 'Secure underground parking' },
    { icon: FaUtensils, title: 'Fine Dining', description: 'Award-winning restaurant' },
    { icon: FaDumbbell, title: 'Fitness Center', description: 'State-of-the-art gym' },
    { icon: FaConciergeBell, title: 'Concierge', description: '24/7 guest services' },
  ];

  const rooms = [
    {
      id: 'deluxe',
      title: 'Deluxe Room',
      description: 'Comfortable and elegant rooms with modern amenities',
      price: 199,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      features: ['King Size Bed', 'City View', 'Free WiFi', 'Mini Bar', 'Work Desk']
    },
    {
      id: 'executive',
      title: 'Executive Room',
      description: 'Premium workspace with luxurious accommodations',
      price: 299,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600',
      features: ['Executive Lounge Access', 'Premium Amenities', 'Work Area', 'City View', 'Complimentary Breakfast']
    },
    {
      id: 'suite',
      title: 'Luxury Suite',
      description: 'Ultimate luxury with separate living area',
      price: 499,
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600',
      features: ['Separate Living Area', 'Premium Suite', 'Butler Service', 'Panoramic View', 'Spa Access']
    }
  ];

  return (
    <div className="home">
      <Hero />

      {/* <!-- Amenities Section --> */}
      <section className="section amenities-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header text-center"
          >
            <h2>World-Class Amenities</h2>
            <p className="section-subtitle">
              Experience luxury with our premium facilities and services
            </p>
          </motion.div>

          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="amenity-card"
              >
                <div className="amenity-icon">
                  <amenity.icon />
                </div>
                <h4>{amenity.title}</h4>
                <p>{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Rooms Section --> */}
      <section className="section rooms-section bg-off-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header text-center"
          >
            <h2>Luxurious Accommodations</h2>
            <p className="section-subtitle">
              Choose from our selection of elegant rooms and suites
            </p>
          </motion.div>

          <div className="rooms-grid">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <RoomCard room={room} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/rooms" className="btn btn-outline">
              View All Rooms
              <FiChevronRight className="btn-icon" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* <!-- Gallery Preview --> */}
      <GalleryPreview />

      {/* <!-- CTA Section --> */}
      <section className="section cta-section bg-primary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-content text-center"
          >
            <h2>Ready to Experience Luxury?</h2>
            <p>
              Book your stay at Luxuria Grand Hotel and enjoy world-class hospitality
            </p>
            <Link to="/booking" className="btn btn-white">
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;