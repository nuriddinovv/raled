import React, { useContext, useEffect, useState } from "react";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/Context";
import "./navbar.css";

export default function Navbar() {
  const { text, changeLanguage } = useContext(LanguageContext);
  const [selectedLanguage, setSelectedLanguage] = useState("uz");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      changeLanguage(storedLanguage);
    }
  }, [changeLanguage]);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav>
        <div className="wrapper">
          <div
            style={{ transition: "0.3s" }}
            className="nav_toggle"
            onClick={toggleMenu}
          >
            {menuOpen ? "✖" : "☰"} {/* Toggle button */}
          </div>
          <div className="nav_logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className={`nav_link ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <NavLink to="/">{text.navbar.home}</NavLink>
              </li>
              <li>
                <NavLink to="/about">{text.navbar.about}</NavLink>
              </li>
              <li>
                <NavLink to="/redikt">{text.navbar.redikt}</NavLink>
              </li>
              <li>
                <NavLink to="/book">{text.navbar.books}</NavLink>
              </li>
              <li>
                <NavLink to="/send">{text.navbar.send}</NavLink>
              </li>
              <li>
                <NavLink to="/contact">{text.navbar.contact}</NavLink>
              </li>
              <li>
                <NavLink to="/arxiv">{text.navbar.arxiv}</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav_lang">
            <select onChange={handleLanguageChange} value={selectedLanguage}>
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}
