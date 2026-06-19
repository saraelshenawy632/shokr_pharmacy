import "./Contracts.css";
import { motion } from "framer-motion";

function Contracts() {
  const companies = [
    { id: 1, name: "AXA", img: "/axaLogo.png" },

    { id: 2, name: "GlobeMed", img: "/globemedLogo.jfif" },

    { id: 3, name: "Al Ahly Medical Company", img: "/amc.jfif" },

    { id: 4, name: "Misr Insurance", img: "/masr insurance.jpg" },

    { id: 5, name: "Limitless Care", img: "/limitlesslogo.jfif" },

    { id: 6, name: "Misr Healthcare", img: "/misrHealthLogo.png" },

    { id: 7, name: "Reliance Health", img: "/reliance health logo.png" },

    { id: 8, name: "Mersal Foundation", img: "/mersalLogo.png" },

    { id: 9, name: "SehaOne", img: "/sehaoneLogo.jfif" },

    { id: 10, name: "MedNet", img: "/mednetLogo.jpg" },

    { id: 11, name: "MetLife", img: "/metlifeLogo.png" },

    { id: 12, name: "NextCare", img: "/nextcareLogo.png" },

    { id: 13, name: "MedRight", img: "/medrightLogo.png" },

    { id: 14, name: "MedSure", img: "/medsureLogo.jfif" },

    { id: 15, name: "Elaraby", img: "/elarabyLogo.png" },

    { id: 16, name: "Telecom Egypt", img: "/telecomelogo.jpg" },

    { id: 17, name: "Banque Misr", img: "/Banque_Misr.png" },

    { id: 18, name: "EMC", img: "/emc.png" },

    { id: 19, name: "Health & Wealth", img: "/healthwealth.jfif" },

    { id: 20, name: "Inaya", img: "/inaya.jfif" },

    { id: 21, name: "Osman Group", img: "/osmangroup.jfif" },

    { id: 22, name: "Sinako", img: "/sinako.webp" },

    { id: 23, name: "UniCare", img: "/unicarelogo.png" },
  ];

  return (
    <section className="contracts-section">
      <div className="contracts-header">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Trusted Partners
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Medical Contracts
        </motion.h1>

        <p>
          We cooperate with trusted insurance companies to provide better
          healthcare services
        </p>
      </div>

      <div className="contracts-grid">
        {companies.map((company, index) => (
          <motion.div
            className="contract-card"
            key={company.id}
            initial={{
              opacity: 0,

              y: 40,
            }}
            whileInView={{
              opacity: 1,

              y: 0,
            }}
            transition={{
              duration: 0.5,

              delay: index * 0.04,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,

              scale: 1.04,
            }}
          >
            <div className="logo-box">
              <img src={company.img} alt={company.name} loading="lazy" />
            </div>

            <h3>{company.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Contracts;
