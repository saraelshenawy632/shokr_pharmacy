import React from "react";
import "./services.css";
import { useTranslation } from "react-i18next";
import {
  FaPills,
  FaTruckMedical,
  FaUserDoctor,
  FaHeartPulse,
  FaSyringe,
  FaNotesMedical
} from "react-icons/fa6";
import { motion } from "framer-motion";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaPills />,
      title: t("ser_avail_title"),
      text: t("ser_avail_desc")
    },
    {
      icon: <FaTruckMedical />,
      title: t("ser_truck_title"),
      text: t("ser_truck_desc")
    },
    {
      icon: <FaUserDoctor />,
      title: t("ser_doctor_title"),
      text: t("ser_doctor_desc")
    },
    {
      icon: <FaHeartPulse />,
      title: t("ser_pulse_title"),
      text: t("ser_pulse_desc")
    },
    {
      icon: <FaSyringe />,
      title: t("ser_supplies_title"),
      text: t("ser_supplies_desc")
    },
    {
      icon: <FaNotesMedical />,
      title: t("ser_presc_title"),
      text: t("ser_presc_desc")
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-header">
        <motion.span 
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("services_sub")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t("services_title")}
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
          {t("services_desc")}
        </motion.p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="icon-box">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;