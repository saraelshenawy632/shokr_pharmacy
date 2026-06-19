import React from 'react';
import "./MedicationCategories.css"; // تعديل المسار ليتطابق مع اسم الفولدر والكيس الحقيقية
import { motion } from "framer-motion";
import { 
  FaCapsules, 
  FaBaby, 
  FaPumpMedical, 
  FaKitMedical, 
  FaHeartPulse, 
  FaWandMagicSparkles // تعديل الأيقونة المفقودة بأيقونة صحيحة وموجودة في fa6
} from "react-icons/fa6";

function MedicationCategories() {
  const categories = [
    {
      icon: <FaCapsules />,
      title: "Prescription Medications",
      subtitle: "Chronic & Specialized Treatments",
      desc: "A comprehensive and fully-monitored stock for chronic diseases, critical illness protocols, and specialized therapies."
    },
    {
      icon: <FaHeartPulse />,
      title: "OTC & Pain Relief",
      subtitle: "Everyday Health Essentials",
      desc: "Quick and safe over-the-counter remedies, cold and flu treatments, painkillers, and trusted first-aid support."
    },
    {
      icon: <FaPumpMedical />,
      title: "Dermocosmetics & Skincare",
      subtitle: "Premium Clinical Beauty",
      desc: "Top international and local brands specialized in medical skincare, hair revitalization, and advanced dermatological solutions."
    },
    {
      icon: <FaBaby />,
      title: "Baby & Mother Care",
      subtitle: "Gentle Infant Nutrition & Wellness",
      desc: "Certified infant milk formulas, secure baby products, hypoallergenic skincare, and essential maternal health supplements."
    },
    {
      icon: <FaWandMagicSparkles />,
      title: "Vitamins & Supplements",
      subtitle: "Immunity & Daily Vitality",
      desc: "High-potency immunity boosters, premium multi-vitamins, certified sports nutrition, and essential daily mineral complexes."
    },
    {
      icon: <FaKitMedical />,
      title: "Medical Devices & Supplies",
      subtitle: "Home Health Monitoring Equipment",
      desc: "Accurate blood pressure monitors, glucose meters, advanced sanitizers, and high-quality daily medical accessories."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="med-categories" id="categories">
      {/* Premium Header */}
      <div className="categories-header">
        <motion.span 
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Medical Range
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Explore Our Product Categories
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
          Everything you and your family need, carefully managed by professional healthcare experts.
        </motion.p>
      </div>

      <motion.div 
        className="categories-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {categories.map((cat, index) => (
          <motion.div 
            key={index} 
            className="category-card"
            variants={cardVariants}
            whileHover={{ y: -10 }}
          >
            <div className="cat-icon-wrapper">
              {cat.icon}
            </div>
            
            <div className="cat-info">
              <h3>{cat.title}</h3>
              <span className="english-sub">{cat.subtitle}</span>
              <p>{cat.desc}</p>
            </div>
            
            <div className="card-glow"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default MedicationCategories;