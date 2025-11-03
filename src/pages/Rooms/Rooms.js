import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch, FaStar, FaWifi, FaParking, FaSwimmingPool, FaUtensils } from 'react-icons/fa';
import RoomCard from '../../components/RoomCard/RoomCard';
import './Rooms.css';

const Rooms = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const rooms = [
    {
      id: 'deluxe',
      title: 'Deluxe Room',
      description: 'Comfortable and elegant rooms with modern amenities',
      price: 199,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      features: ['King Size Bed', 'City View', 'Free WiFi', 'Mini Bar', 'Work Desk'],
      category: 'standard',
      capacity: 2
    },
    {
      id: 'executive',
      title: 'Executive Room',
      description: 'Premium workspace with luxurious accommodations',
      price: 299,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600',
      features: [
        'Executive Lounge Access', 'Premium Amenities', 'Work Area', 
        'City View', 'Complimentary Breakfast'
      ],
      category: 'business',
      capacity: 2
    },
    {
      id: 'suite',
      title: 'Luxury Suite',
      description: 'Ultimate luxury with separate living area',
      price: 499,
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600',
      features: [
        'Separate Living Area', 'Premium Suite', 'Butler Service', 
        'Panoramic View', 'Spa Access'
      ],
      category: 'luxury',
      capacity: 4
    },
    {
      id: 'presidential',
      title: 'Presidential Suite',
      description: 'The pinnacle of luxury and sophistication',
      price: 899,
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=600',
      features: [
        'Private Butler', 'Jacuzzi', 'Private Bar', 'Conference Room', 'Helicopter Access'
      ],
      category: 'luxury',
      capacity: 6
    }
  ];

  const categories = [
    { id: 'all', name: 'All Rooms', count: rooms.length },
    { id: 'standard', name: 'Standard', count: rooms.filter(r => r.category === 'standard').length },
    { id: 'business', name: 'Business', count: rooms.filter(r => r.category === 'business').length },
    { id: 'luxury', name: 'Luxury', count: rooms.filter(r => r.category === 'luxury').length }
  ];

  const filteredRooms = rooms.filter(room => {
    const matchesCategory = selectedCategory === 'all' || room.category === selectedCategory;
    const matchesSearch = room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = room.price >= priceRange[0] && room.price <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="rooms">
      {/* <!-- Hero Section --> */}
      <section className="rooms-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center"
          >
            <h1>Our Rooms & Suites</h1>
            <p>Choose from our selection of luxurious accommodations</p>
          </motion.div>
        </div>
      </section>

      {/* <!-- Filters Section --> */}
      <section className="section filters-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="filters-container"
          >
            <div className="filter-group">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search rooms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            <div className="filter-group">
              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  >
                    {category.name}
                    <span className="category-count">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <!-- Rooms Grid --> */}
      <section className="section rooms-grid-section bg-off-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="results-info"
          >
            <p>
              Showing {filteredRooms.length} of {rooms.length} rooms
            </p>
          </motion.div>

          <div className="rooms-grid">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <RoomCard room={room} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="no-results"
              >
                <h3>No rooms found</h3>
                <p>Try adjusting your search criteria</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;