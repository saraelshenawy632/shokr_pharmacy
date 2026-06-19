import "./services.css";
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
  const services = [
    {
      icon: <FaPills />,
      title: "Medicine Availability",
      text: "Wide range of medicines and healthcare products available anytime."
    },
    {
      icon: <FaTruckMedical />,
      title: "Fast Delivery",
      text: "Delivering your medicines safely all over Egypt."
    },
    {
      icon: <FaUserDoctor />,
      title: "Medical Consultation",
      text: "Professional support to help you choose the right products."
    },
    {
      icon: <FaHeartPulse />,
      title: "Healthcare Products",
      text: "Quality personal care and wellness products."
    },
    {
      icon: <FaSyringe />,
      title: "Medical Supplies",
      text: "Trusted medical equipment and supplies."
    },
    {
      icon: <FaNotesMedical />,
      title: "Prescriptions",
      text: "Easy prescription services with trusted care."
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
          What We Offer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our Services
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
          Complete pharmacy care made for you
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