import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaCreditCard, FaCheck } from 'react-icons/fa';
import './Booking.css';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState({
    roomType: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'credit-card'
  });

  const rooms = {
    deluxe: { name: 'Deluxe Room', price: 199 },
    executive: { name: 'Executive Room', price: 299 },
    suite: { name: 'Luxury Suite', price: 499 }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roomType = params.get('room');
    
    if (roomType && rooms[roomType]) {
      setBookingData(prev => ({
        ...prev,
        roomType: roomType
      }));
    }
  }, [location.search]);

  const calculateTotal = () => {
    if (!bookingData.checkIn || !bookingData.checkOut || !bookingData.roomType) return 0;
    
    const checkIn = new Date(bookingData.checkIn);
    const checkOut = new Date(bookingData.checkOut);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const roomPrice = rooms[bookingData.roomType]?.price || 0;
    
    return nights * roomPrice;
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  const handleStep1Next = (e) => {
    e.preventDefault();
    if (bookingData.roomType && bookingData.checkIn && bookingData.checkOut) {
      setCurrentStep(2);
    }
  };

  const handleStep2Next = (e) => {
    e.preventDefault();
    if (bookingData.firstName && bookingData.lastName && bookingData.email && bookingData.phone) {
      setCurrentStep(3);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate booking submission
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(4); // Confirmation step
    }, 2000);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="booking">
      {/* <!-- Hero Section --> */}
      <section className="booking-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center"
          >
            <h1>Book Your Stay</h1>
            <p>Reserve your luxury accommodation today</p>
          </motion.div>
        </div>
      </section>

      {/* <!-- Booking Steps --> */}
      <section className="section booking-steps-section">
        <div className="container">
          <div className="booking-steps">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`step ${currentStep >= step ? 'completed' : ''} ${currentStep === step ? 'active' : ''}`}
              >
                <div className="step-number">
                  {currentStep > step ? <FaCheck /> : step}
                </div>
                <div className="step-label">
                  {step === 1 && 'Room Selection'}
                  {step === 2 && 'Guest Details'}
                  {step === 3 && 'Payment'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Booking Form --> */}
      <section className="section booking-form-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="booking-form-container"
          >
            {currentStep === 1 && (
              <form className="booking-form" onSubmit={handleStep1Next}>
                <h3>Step 1: Room Selection</h3>
                
                <div className="form-group">
                  <label htmlFor="roomType">Room Type *</label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={bookingData.roomType}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                  >
                    <option value="">Select a room type</option>
                    {Object.entries(rooms).map(([key, room]) => (
                      <option key={key} value={key}>
                        {room.name} - ${room.price}/night
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="checkIn">Check-in Date *</label>
                    <div className="input-with-icon">
                      {/* <FaCalendarAlt className="input-icon" /> */}
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={bookingData.checkIn}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="checkOut">Check-out Date *</label>
                    <div className="input-with-icon">
                      {/* <FaCalendarAlt className="input-icon" /> */}
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={bookingData.checkOut}
                        onChange={handleInputChange}
                        required
                        className="form-control"
                        min={bookingData.checkIn}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Number of Guests *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                  >
                    {[1, 2, 3,].map(num => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">
                  Continue to Guest Details
                </button>
              </form>
            )}

            {currentStep === 2 && (
              <form className="booking-form" onSubmit={handleStep2Next}>
                <h3>Step 2: Guest Information</h3>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <div className="input-with-icon">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={bookingData.firstName}
                        onChange={handleInputChange}
                        required
                        className="form-controll"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <div className="input-with-icon">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={bookingData.lastName}
                        onChange={handleInputChange}
                        required
                        className="form-controll"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">    Email Address *</label>
                    <div className="input-with-icon">
                      <FaEnvelope className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        required
                        className="form-controll"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <div className="input-with-icon">
                      <FaPhone className="input-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-controll"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="specialRequests">Special Requests (Optional)</label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleInputChange}
                    rows="3"
                    className="form-control"
                    placeholder="Any special requests or requirements?"
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="btn btn-outline"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Continue to Payment
                  </button>
                </div>
              </form>
            )}

            {currentStep === 3 && (
              <form className="booking-form" onSubmit={handleBookingSubmit}>
                <h3>Step 3: Payment Information</h3>
                
                <div className="booking-summary">
                  <h4>Booking Summary</h4>
                  <div className="summary-item">
                    <span>Room Type:</span>
                    <strong>{rooms[bookingData.roomType]?.name}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Check-in:</span>
                    <strong>{formatDate(bookingData.checkIn)}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Check-out:</span>
                    <strong>{formatDate(bookingData.checkOut)}</strong>
                  </div>
                  <div className="summary-item">
                    <span>Guests:</span>
                    <strong>{bookingData.guests} Guest{bookingData.guests > 1 ? 's' : ''}</strong>
                  </div>
                  <div className="summary-total">
                    <span>Total Amount:</span>
                    <strong>${calculateTotal()}</strong>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="paymentMethod">Payment Method *</label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={bookingData.paymentMethod}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                  >
                    <option value="credit-card">Credit Card</option>
                    <option value="debit-card">Debit Card</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>

                <p className="payment-note">
                  You will be redirected to our secure payment gateway to complete your booking.
                </p>

                <div className="form-actions">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="btn btn-outline"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Processing... ' : 'Complete Booking'}
                  </button>
                </div>
              </form>
            )}

            {currentStep === 4 && (
              <div className="booking-confirmation">
                <div className="confirmation-icon">
                  <FaCheck />
                </div>
                <h3>Booking Confirmed!</h3>
                <p>Thank you for choosing Luxuria Grand Hotel.</p>
                <p>We've sent a confirmation email to {bookingData.email}</p>
                
                <div className="confirmation-details">
                  <div className="detail-item">
                    <span>Booking Reference:</span>
                    <strong>#{Math.random().toString(36).substr(2, 9).toUpperCase()}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Total Amount:</span>
                    <strong>${calculateTotal()}</strong>
                  </div>
                </div>

                <div className="confirmation-actions">
                  <button
                    onClick={() => navigate('/')}
                    className="btn btn-primary"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;