import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    { id: 1, category: 'rooms', title: 'Deluxe Room', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800' },
    { id: 2, category: 'rooms', title: 'Executive Room', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800' },
    { id: 3, category: 'rooms', title: 'Luxury Suite', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800' },
    { id: 4, category: 'dining', title: 'Restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800' },
    { id: 5, category: 'dining', title: 'Fine Dining', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800' },
    { id: 6, category: 'facilities', title: 'Swimming Pool', image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800' },
    { id: 7, category: 'facilities', title: 'Spa', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800' },
    { id: 8, category: 'facilities', title: 'Fitness Center', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800' },
    { id: 9, category: 'exterior', title: 'Hotel Exterior', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800' }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'dining', label: 'Dining' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'exterior', label: 'Exterior' }
  ];

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  const openLightbox = (image, index) => {
    setLightboxImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIndex);
    setLightboxImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
    setLightboxImage(filteredItems[prevIndex]);
  };

  return (
    <div className="gallery-page">
      <section className="rooms-hero">
        <div className="container">
           <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="hero-content text-center"
                    >
                      <h1>Gallery</h1>
                      <p>Explore our luxury hotel through stunning visuals</p>
                    </motion.div>
        </div>
      </section>

      <section className="gallery-section section">
        <div className="container">
          <div className="gallery-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div 
            className="gallery-grid"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="gallery-item"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(item, index)}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-item-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            <button className="lightbox-btn prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
              <FaChevronLeft />
            </button>
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImage.image} alt={lightboxImage.title} />
              <div className="lightbox-info">
                <h3>{lightboxImage.title}</h3>
                <p>{lightboxIndex + 1} / {filteredItems.length}</p>
              </div>
            </motion.div>
            <button className="lightbox-btn next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
