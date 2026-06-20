import React, { useState } from "react";
import "./contact.css";
import { FaPhone, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import WebsiteQRCode from "../WebsiteQRCode/WebsiteQRCode";

function ContactUs() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    targetNumber: "201004003501",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = formData.targetNumber;

    const textMessage =
      `${t("whatsapp_header")} \n\n` +
      `*${t("form_name")}:* ${formData.name}\n` +
      `*${t("form_email")}:* ${formData.email}\n` +
      `*${t("form_msg")}:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-us" id="contact">
      <div className="contact-header">
        <motion.span
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("contact_us")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t("contact_us")}
        </motion.h1>

        <motion.div
          className="animated-line"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "80px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {t("contact_desc")}
        </motion.p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-info-panel"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>{t("contact_info_h2")}</h2>
          <p className="info-desc">{t("contact_info_p")}</p>

          <div className="info-items">
            <div className="info-item">
              <div className="icon-box-mini">
                <FaPhone />
              </div>
              <div className="info-text">
                <h3>{t("phone_title")}</h3>
                <p>+20 100 400 3501 (Mobile)</p>
                <p>040 333 4857 (Landline)</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box-mini">
                <FaEnvelope />
              </div>
              <div className="info-text">
                <h3>{t("email_title")}</h3>
                <p>contact@shokrpharmacy.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box-mini">
                <FaClock />
              </div>
              <div className="info-text">
                <h3>{t("hours_title")}</h3>
                <p>{t("hours_desc")}</p>
              </div>
            </div>
          </div>

          <div
            className="qr-wrapper-section"
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.75)",
                marginBottom: "5px",
                fontWeight: "500",
                letterSpacing: "0.5px",
              }}
            >
              {t("qr_text")}
            </p>
            <WebsiteQRCode />
          </div>
        </motion.div>

        <motion.div
          className="contact-form-panel"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t("form_name")}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label>{t("form_email")}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                required
              />
            </div>

            <div className="form-group">
              <label>{t("form_target")}</label>
              <select
                name="targetNumber"
                value={formData.targetNumber}
                onChange={handleChange}
                className="contact-select"
                required
              >
                <option value="201004003501">
                  Direct Mobile (+20 100 400 3501)
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>{t("form_msg")}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>{t("form_btn")}</span>
              <FaWhatsapp className="btn-icon" style={{ fontSize: "1.2rem", marginInlineStart: "8px" }} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactUs;