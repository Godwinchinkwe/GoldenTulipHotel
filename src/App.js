import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Pages
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Booking from './pages/Booking/Booking';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import RoomDetails from './pages/RoomDetails/RoomDetails';
import GalleryPreview from './components/GalleryPreview/GalleryPreview';
import Gallery from "./pages/Gallery/Gallery"

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ErrorPage from "./components/ErrorPage/ErrorPage";

// Global Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <LoadingScreen />
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:roomType" element={<RoomDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallerypreview" element={<GalleryPreview />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking-error" element={<ErrorPage />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;