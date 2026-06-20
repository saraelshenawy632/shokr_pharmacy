import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
import {
  FaTruck,
  FaHeart,
  FaShieldAlt,
  FaPhone,
  FaMobileAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <FaTruck className="footer-icon" />
          <h3>{t("ser_truck_title")}</h3>
          <p>{t("feat_truck_desc")}</p>
        </div>

        <div className="footer-box">
          <FaHeart className="footer-icon" />
          <h3>{t("feat_avail_title")}</h3>
          <p>{t("feat_avail_desc")}</p>
        </div>

        <div className="footer-box">
          <FaShieldAlt className="footer-icon" />
          <h3>{t("secure_payments")}</h3>
          <p>{t("payment_desc")}</p>
        </div>
      </div>

      <div className="footer-content">
        <p className="footer-brand-text">
          {t("footer_brand")}
        </p>

        <div className="social">
          <div
            className="social-btn"
            onClick={() => handleSocialClick("https://www.instagram.com/shokr_pharmacy1?igsh=Mms5ZXdjamI5czJo")}
            role="button"
            tabIndex={0}
          >
            <FaInstagram />
          </div>

          <div
            className="social-btn"
            onClick={() => handleSocialClick("https://www.facebook.com/share/1BUGweBP7p/?mibextid=wwXIfr")}
            role="button"
            tabIndex={0}
          >
            <FaFacebook />
          </div>
        </div>

        <div className="premium-contact-wrapper">
          <div
            className="modern-phone-card"
            onClick={() => handleCall("+201004003501")}
            role="button"
            tabIndex={0}
          >
            <div className="phone-icon-wrapper mobile-bg">
              <FaMobileAlt />
            </div>
            <div className="phone-details">
              <span className="label-top">Direct Mobile</span>
              <span className="number-string">+20 100 400 3501</span>
            </div>
          </div>

          <div
            className="modern-phone-card"
            onClick={() => handleCall("0403334857")}
            role="button"
            tabIndex={0}
          >
            <div className="phone-icon-wrapper landline-bg">
              <FaPhone />
            </div>
            <div className="phone-details">
              <span className="label-top">Pharmacy Landline</span>
              <span className="number-string">040 333 4857</span>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        {t("footer_rights")}
      </div>
    </footer>
  );
}

export default Footer;