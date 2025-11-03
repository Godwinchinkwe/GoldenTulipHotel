import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import './GalleryPreview.css';

const GalleryPreview = () => {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400',
      title: 'Hotel Exterior',
      category: 'Exterior',
    },
    {
      url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400',
      title: 'Luxury Lobby',
      category: 'Lobby',
    },
    {
      url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400',
      title: 'Premium Suite',
      category: 'Rooms',
    },
    {
      url: 'https://images.unsplash.com/photo-1579723350694-4a2a1b59e78a?w=400',
      title: 'Fine Dining',
      category: 'Restaurant',
    },
    {
      url: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400',
      title: 'Spa & Wellness',
      category: 'Amenities',
    },
    {
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400',
      title: 'Event Space',
      category: 'Events',
    },
  ];

  return (
    <section className="section gallery-preview-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <h2>Hotel Gallery</h2>
          <p className="section-subtitle">
            Explore our luxurious facilities and accommodations
          </p>
        </motion.div>

        <div className="gallery-preview-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="gallery-preview-item"
            >
              <img src={image.url} alt={image.title} />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <h4>{image.title}</h4>
                  <p>{image.category}</p>
                </div>
              </div>
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
          <Link to="/gallery" className="btn btn-outline">
            View Full Gallery
            <FiChevronRight className="btn-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;