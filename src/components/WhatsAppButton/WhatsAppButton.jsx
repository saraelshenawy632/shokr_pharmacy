import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsApp() {
  const openWhatsApp = () => {
    // تم تعديل الرقم بإضافة كود مصر الدولي 20 وحذف الصفر الأول
    window.open("https://wa.me/201004003501", "_blank");
  };

  return (
    <button className="whatsapp" onClick={openWhatsApp}>
      <FaWhatsapp />
      <span>Chat With Shokr Pharmacy</span>
    </button>
  );
}

export default WhatsApp;
