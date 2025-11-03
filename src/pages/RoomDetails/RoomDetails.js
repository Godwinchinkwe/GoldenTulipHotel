import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaWifi, FaParking, FaSwimmingPool, FaUtensils, FaTv, FaCoffee, FaSnowflake, FaShieldAlt, FaConciergeBell } from 'react-icons/fa';
import { FiChevronRight, FiCheck } from 'react-icons/fi';
import './RoomDetails.css';

const RoomDetails = () => {
  const { roomType } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  const rooms = {
    deluxe: {
      title: 'Deluxe Room',
      description: 'Comfortable and elegant rooms with modern amenities',
      price: 199,
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200'
      ],
      features: [
        'King Size Bed', 'City View', 'Free WiFi', 'Mini Bar', 'Work Desk',
        'Air Conditioning', 'Flat Screen TV', 'Coffee Maker', 'Safe'
      ],
      amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Safe', 'Flat Screen TV'],
      size: '35 sqm',
      capacity: 2,
      bedType: 'King Size Bed'
    },
    executive: {
      title: 'Executive Room',
      description: 'Premium workspace with luxurious accommodations for business travelers',
      price: 299,
      images: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200'
      ],
      features: [
        'Executive Lounge Access', 'Premium Amenities', 'Work Area', 'City View',
        'Complimentary Breakfast', 'King Size Bed', 'Air Conditioning', 'Safe'
      ],
      amenities: ['Executive Lounge', 'Complimentary Breakfast', 'Premium Amenities', 'Work Area', 'City View'
      ],
      size: '45 sqm',
      capacity: 2,
      bedType: 'King Size Bed'
    },
    suite: {
      title: 'Luxury Suite',
      description: 'Ultimate luxury with separate living area and premium amenities',
      price: 499,
      images: [
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200'
      ],
      features: [
        'Separate Living Area', 'Premium Suite', 'Butler Service', 'Panoramic View',
        'Spa Access', 'King Size Bed', 'Jacuzzi', 'Private Bar'
      ],
      amenities: ['Butler Service', 'Spa Access', 'Private Bar', 'Jacuzzi', 'Panoramic View'
      ],
      size: '80 sqm',
      capacity: 4,
      bedType: 'King Size Bed'
    }
  };

  const room = rooms[roomType];

  useEffect(() => {
    if (!room) {
      // Redirect to rooms page if room type is invalid
      window.location.href = '/rooms';
      return;
    }
  }, [roomType, room]);

  if (!room) return null;

  const getIconForAmenity = (amenity) => {
    const lowerAmenity = amenity.toLowerCase();
    if (lowerAmenity.includes('wifi')) return FaWifi;
    if (lowerAmenity.includes('parking')) return FaParking;
    if (lowerAmenity.includes('pool') || lowerAmenity.includes('swimming')) return FaSwimmingPool;
    if (lowerAmenity.includes('breakfast') || lowerAmenity.includes('dining')) return FaUtensils;
    if (lowerAmenity.includes('tv')) return FaTv;
    if (lowerAmenity.includes('coffee')) return FaCoffee;
    if (lowerAmenity.includes('air') || lowerAmenity.includes('conditioning')) return FaSnowflake;
    if (lowerAmenity.includes('safe')) return FaShieldAlt;
    if (lowerAmenity.includes('concierge')) return FaConciergeBell;
    return FaStar;
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="room-details">
      {/* <!-- Room Banner --> */}
      <section className="room-banner">
        <div
          className="room-banner-bg"
          style={{ backgroundImage: `url(${room.images[0]})` }}
        />
        <div className="room-banner-content text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{room.title}</h1>
            <div className="room-price-banner">
              ${room.price}
              <span>per night</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <!-- Room Gallery --> */}
      <section className="section room-gallery-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gallery-container"
          >
            <div className="gallery-main">
              <div className="main-image-container">
                <img
                  src={room.images[currentImage]}
                  alt={`${room.title} - Image ${currentImage + 1}`}
                  className="main-image"
                />
                <button
                  onClick={prevImage}
                  className="gallery-nav prev"
                  aria-label="Previous image"
                >
                  <FiChevronRight />
                </button>
                <button
                  onClick={nextImage}
                  className="gallery-nav next"
                  aria-label="Next image"
                >
                  <FiChevronRight />
                </button>
                
                <div className="image-indicators">
                  {room.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`indicator ${index === currentImage ? 'active' : ''}`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="gallery-thumbnails">
                {room.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`thumbnail ${index === currentImage ? 'active' : ''}`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <!-- Room Details --> */}
      <section className="section room-details-section">
        <div className="container">
          <div className="room-details-grid">
            {/* <!-- Room Info --> */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="room-info"
            >
              <h2>{room.title}</h2>
              <p className="room-description">{room.description}</p>
              
              <div className="room-specs">
                <div className="spec-item">
                  <strong>Size:</strong> {room.size}
                </div>
                <div className="spec-item">
                  <strong>Capacity:</strong> {room.capacity} Guest{room.capacity > 1 ? 's' : ''}
                </div>
                <div className="spec-item">
                  <strong>Bed Type:</strong> {room.bedType}
                </div>
              </div>

              <div className="room-price-details">
                <div className="price">
                  <span className="price-amount">${room.price}</span>
                  <span className="price-period">per night</span>
                </div>
                <Link to="/booking" className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </motion.div>

            {/* <!-- Room Features --> */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="room-features-box"
            >
              <h3>Room Features & Amenities</h3>
              
              <div className="features-grid">
                {room.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="feature-item"
                  >
                    <FiCheck className="feature-icon" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="amenities-section">
                <h4>Premium Amenities</h4>
                <div className="amenities-grid">
                  {room.amenities.map((amenity, index) => {
                    const IconComponent = getIconForAmenity(amenity);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="amenity-card"
                      >
                        <IconComponent className="amenity-icon" />
                        <span>{amenity}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
            <h2>Ready to Book {room.title}?</h2>
            <p>Experience luxury at its finest</p>
            <Link to="/booking" className="btn btn-white">
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RoomDetails;