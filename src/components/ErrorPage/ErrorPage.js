import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const errorMessage =
    location.state?.errorMessage || "An unexpected error occurred.";
  const errorDetails =
    location.state?.errorDetails || "No additional details available.";

  return (
    <div className="error-page">
      <div className="error-card">
        <div className="error-icon">
          <FaExclamationTriangle />
        </div>

        <h2>Booking Failed</h2>
        <p className="error-main-text">
          Something went wrong while processing your booking.
        </p>

        <div className="error-info">
          <h4>Error Message:</h4>
          <p>{errorMessage}</p>

          <h4>Details:</h4>
          <pre className="error-details">{String(errorDetails)}</pre>
        </div>

        <div className="error-actions">
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Try Again
          </button>

          <button className="btn btn-outline" onClick={() => navigate("/")}>
            Return Home
          </button>
        </div>

        <div className="support-box">
          <p>
            Need help? Contact our support:  
            <strong> support@airportgoldentulip.com</strong>
          </p>
          <p>Or call: <strong>+234 800 123 4567</strong></p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
