import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200',
      title: 'Hotel Exterior',
      category: 'Exterior',
      description: 'Stunning architecture and grand entrance'
    },
    {
      url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200',
      title: 'Luxury Lobby',
      category: 'Lobby',
      description: 'Elegant lobby with premium furnishings'
    },
    {
      url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200',
      title: 'Premium Suite',
      category: 'Rooms',
      description: 'Luxurious suite with premium amenities'
    },
    {
      url: 'https://images.unsplash.com/photo-1579723350694-4a2a1b59e78a?w=1200',
      title: 'Fine Dining',
      category: 'Restaurant',
      description: 'Exquisite dining experience'
    },
    {
      url: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=1200',
      title: 'Spa & Wellness',
      category: 'Amenities',
      description: 'Relaxing spa and wellness facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200',
      title: 'Event Space',
      category: 'Events',
      description: 'Elegant event and conference spaces'
    },
    {
      url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200',
      title: 'Swimming Pool',
      category: 'Amenities',
      description: 'Olympic-size heated swimming pool'
    },
    {
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200',
      title: 'Fitness Center',
      category: 'Amenities',
      description: 'State-of-the-art fitness facilities'
    },
    {
      url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200',
      title: 'Luxury Suite Living',
      category: 'Rooms',
      description: 'Spacious living area in our premium suites'
    },
    {
      url: 'https://images.unsplash.com/photo-1590490359858-494f6ef6105d?w=1200',
      title: 'Executive Lounge',
      category: 'Amenities',
      description: 'Exclusive executive lounge access'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'Exterior', name: 'Exterior' },
    { id: 'Lobby', name: 'Lobby' },
    { id: 'Rooms', name: 'Rooms' },
    { id: 'Restaurant', name: 'Restaurant' },
    { id: 'Amenities', name: 'Amenities' },
    { id: 'Events', name: 'Events' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(filteredImages[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="gallery">
      <!-- Hero Section -->
      <section className="gallery-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center"
          >
            <h1>Hotel Gallery</h1>
            <p>Explore our luxurious facilities and accommodations</p>
          </motion.div>
        </div>
      </section>

      <!-- Category Filter -->
      <section className="section category-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="category-filters"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <!-- Gallery Grid -->
      <section className="section gallery-grid-section bg-off-white">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.category}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="gallery-item"
                onClick={() => openLightbox(index)}
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
        </div>
      </section>

      <!-- Lightbox -->
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <FaTimes />
              </button>

              <button
                className="lightbox-nav prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              <button
                className="lightbox-nav next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>

              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="lightbox-image"
              />

              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
                <span className="lightbox-category">{selectedImage.category}</span>
              </div>

              <div className="lightbox-counter">
                {currentImageIndex + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;