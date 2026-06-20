import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa"; // أضفنا أيقونة للغة لو حابة
import { useTranslation } from "react-i18next";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // مصفوفة اللينكات بتقرأ المفاتيح (Keys) من ملف الترجمة i18n.js
  const links = [
    {
      name: t("home", "Home"), // الافتراضي لو مش موجود في الترجمة هو الاسم الإنجليزي
      path: "/",
    },
    {
      name: t("medical_range", "Medical Range"),
      path: "/Medical_Range",
    },
    {
      name: t("services", "Services"),
      path: "/services",
    },
    {
      name: t("contracts", "Contracts"),
      path: "/contracts",
    },
    {
      name: t("contact_us", "Contact Us"),
      path: "/contact",
    },
  ];

  // دالة تبديل اللغة وقلب اتجاه الموقع بالكامل (RTL / LTR)
  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLang);
    
    // قلب الاتجاه برمجياً ليتماشى الـ CSS تلقائياً
    document.body.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.body.lang = nextLang;
    
    // غلق قائمة الموبايل عند تغيير اللغة
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/logo1.png" alt="logo" />
        </div>

        <ul className={open ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className={location.pathname === link.path ? "active-link" : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
          
          {/* زر تغيير اللغة داخل القائمة في شاشات الموبايل */}
          <li className="mobile-lang-li">
            <button className="lang-btn-mobile" onClick={toggleLanguage}>
              <FaGlobe style={{ marginInlineEnd: "6px" }} />
              {i18n.language === 'en' ? 'العربية' : 'English'}
            </button>
          </li>
        </ul>

        {/* أزرار التحكم: زر اللغة للشاشات الكبيرة + زر القائمة للموبايل */}
        <div className="nav-controls" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <button className="lang-btn" onClick={toggleLanguage}>
            <FaGlobe style={{ marginInlineEnd: "5px" }} />
            {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>

          <button className="menu" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;