import React, { useContext } from "react";
import logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../context/Context";
import "./navbar.css";
export default function Navbar() {
  const { text, changeLanguage } = useContext(LanguageContext);
  return (
    <div>
      <nav>
        <div className="container">
          <div className="nav_logo ">
            <img src={logo} alt="" />
          </div>
          <div className="nav_link">
            <ul className="d-flex align-items-center gap-3">
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
                <NavLink to="/books">{text.navbar.books}</NavLink>
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
          <div className="nav_lang ">
            <button onClick={() => changeLanguage("uz")}>UZ</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <button onClick={() => changeLanguage("en")}>EN</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
