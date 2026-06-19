import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Medical Range",
      path: "/Medical_Range",
    },
    {
      name: "Services",
      path: "/services",
    },

    {
      name: "Contracts",
      path: "/contracts",
    },

    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

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
        </ul>

        <button className="menu" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
