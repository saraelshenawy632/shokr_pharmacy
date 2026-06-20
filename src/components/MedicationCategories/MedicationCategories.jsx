import React from 'react';
import "./MedicationCategories.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  FaCapsules, 
  FaBaby, 
  FaPumpMedical, 
  FaKitMedical, 
  FaHeartPulse, 
  FaWandMagicSparkles 
} from "react-icons/fa6";

function MedicationCategories() {
  const { t } = useTranslation();

  const categories = [
    {
      icon: <FaCapsules />,
      title: t("cat_presc_title"),
      subtitle: t("cat_presc_sub"),
      desc: t("cat_presc_desc")
    },
    {
      icon: <FaHeartPulse />,
      title: t("cat_otc_title"),
      subtitle: t("cat_otc_sub"),
      desc: t("cat_otc_desc")
    },
    {
      icon: <FaPumpMedical />,
      title: t("cat_skin_title"),
      subtitle: t("cat_skin_sub"),
      desc: t("cat_skin_desc")
    },
    {
      icon: <FaBaby />,
      title: t("cat_baby_title"),
      subtitle: t("cat_baby_sub"),
      desc: t("cat_baby_desc")
    },
    {
      icon: <FaWandMagicSparkles />,
      title: t("cat_vit_title"),
      subtitle: t("cat_vit_sub"),
      desc: t("cat_vit_desc")
    },
    {
      icon: <FaKitMedical />,
      title: t("cat_dev_title"),
      subtitle: t("cat_dev_sub"),
      desc: t("cat_dev_desc")
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
      <div className="categories-header">
        <motion.span 
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t("med_range_sub")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t("med_range_title")}
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
          {t("med_range_desc")}
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