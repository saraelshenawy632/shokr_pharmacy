import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaUserShield,
  FaClock,
  FaTruck,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Services from "../services/services";
import Contracts from "../Contracts/Contracts";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="flash-overlay"></div>

      <section className="hero-section">
        <div className="hero-container single-layout">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="hero-badge">Welcome to Shokr Pharmacy</span>
            <h1>
              Your Health Deserves <br />
              <span>Expert Attention</span>
            </h1>
            <p className="hero-lead-text">
              Your trusted partner in healthcare, providing premium medicines,
              24/7 personal care, and lightning-fast delivery all over Egypt.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => navigate("/contact")}
                style={{ cursor: "pointer", border: "none" }}
              >
                <span>Order Now</span>
                <FaArrowRight />
              </button>

              <button
                className="btn-secondary"
                onClick={() => navigate("/services")}
                style={{ cursor: "pointer", border: "none" }}
              >
                Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Quick Features Bar */}
      <section className="features-bar">
        <div className="features-container">
          <div className="feature-item">
            <FaClock className="feat-icon" />
            <div>
              <h3>24/7 Availability</h3>
              <p>Always open for you</p>
            </div>
          </div>
          <div className="feature-item">
            <FaTruck className="feat-icon" />
            <div>
              <h3>All Egypt Delivery</h3>
              <p>Fast & secured shipping</p>
            </div>
          </div>
          <div className="feature-item">
            <FaUserShield className="feat-icon" />
            <div>
              <h3>Certified Care</h3>
              <p>100% trusted medicines</p>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="locations-section" id="locations">
        <div className="locations-header">
          <motion.span
            className="subtitle"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Branches
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Visit Shokr Pharmacy Branches
          </motion.h1>
          <div className="animated-line"></div>
        </div>

        <div className="locations-grid">
          <motion.div
            className="location-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="loc-info-box">
              <div className="loc-icon-circle">
                <FaMapMarkerAlt className="loc-icon" />
              </div>
              <div>
                <h3>Tanta Branch</h3>
                <p>Al-Bahr Street, In front of El-Ghamrawy</p>
              </div>
            </div>
            <div className="map-wrapper">
              <iframe
                title="Shokr Pharmacy - Tanta Branch"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.1681282240974!2d30.9935105!3d30.7839352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c95b6a7183e7%3A0x6331a980998cfb62!2z2LTYp9ix2Lkg2KfZhNio2K3YsSwg2LfZhti32KcsINin2YTYbadix2KjZDynamic_Yp9mG!5e0!3m2!1sen!2seg!4v1718825000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            className="location-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="loc-info-box">
              <div className="loc-icon-circle">
                <FaMapMarkerAlt className="loc-icon" />
              </div>
              <div>
                <h3>Berma Branch</h3>
                <p>Main Road, Berma Center, Tanta</p>
              </div>
            </div>
            <div className="map-wrapper">
              <iframe
                title="Shokr Pharmacy - Berma Branch"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13702.483256085186!2d30.9161741!3d30.8132483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7cb594896e3ad%3A0x1b419fb3b66479ff!2z2KjYsdmF2KfYjCDZDynamic_mG2LfZpywg2KfZhNi62LHYqNmK2Kk!5e0!3m2!1sen!2seg!4v1718825100000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Contracts />
    </div>
  );
}

export default Home;
