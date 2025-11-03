import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: '123 Luxury Avenue<br />Downtown, New York 10001',
      color: '#FF6B6B'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      content: '<a href="tel:+1234567890">+1 (234) 567-890</a><br /><a href="tel:+1987654321">+1 (987) 654-321</a>',
      color: '#4ECDC4'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: '<a href="mailto:info@luxuriagrandhotel.com">info@luxuriagrandhotel.com</a><br /><a href="mailto:reservations@luxuriagrandhotel.com">reservations@luxuriagrandhotel.com</a>',
      color: '#45B7D1'
    },
    {
      icon: FaClock,
      title: 'Hours',
      content: '24/7 Reception Desk<br />Concierge Services Available',
      color: '#F7DC6F'
    }
  ];

  return (
    <div className="contact">
      {/* <!-- Hero Section --> */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center"
          >
            <h1>Contact Us</h1>
            <p>We're here to help with any questions or booking inquiries</p>
          </motion.div>
        </div>
      </section>

      {/* <!-- Contact Info Section --> */}
      <section className="section contact-info-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header text-center"
          >
            <h2>Get in Touch</h2>
            <p className="section-subtitle">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="contact-info-card"
              >
                <div className="contact-icon-wrapper" style={{ backgroundColor: info.color }}>
                  <info.icon className="contact-icon" />
                </div>
                <h4>{info.title}</h4>
                <div 
                  className="contact-content"
                  dangerouslySetInnerHTML={{ __html: info.content }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Contact Form Section --> */}
      <section className="section contact-form-section bg-off-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header text-center"
          >
            <h2>Send us a Message</h2>
            <p className="section-subtitle">
              We'll get back to you as soon as possible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-container"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message"
              >
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon!</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                      placeholder="Enter message subject"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                      rows="6"
                      placeholder="Enter your message"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary submit-btn"
                >
                  {isLoading ? (
                    <span className="loading">Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;