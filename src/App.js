import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home.jsx";
import Services from "./components/services/services";
import ContactUs from "./components/Contact/contact.jsx";
import WhatsApp from "./components/WhatsAppButton/WhatsAppButton";
import Contracts from "./components/Contracts/Contracts";
import MedicationCategories from "./components/MedicationCategories/MedicationCategories.jsx";
function App() {
  return (
    <>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/Medical_Range" element={<MedicationCategories />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      <WhatsApp />

      <Footer />
    </>
  );
}

export default App;
