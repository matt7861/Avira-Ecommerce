import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/logo-white.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import "./Footer.scss";

export const Footer = () => {
  const currentYear = () => new Date().getFullYear();

  return (
    <footer className="footer">
      <Link to={"/"}>
        <img src={logoWhite} alt="Avira Logo" />
      </Link>
      <div>
        <div className="footer__logos">
          <a href="#">
            <img src={facebook} alt="facebook icon" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram icon" />
          </a>
        </div>
        <p>© {currentYear()} Avira Store</p>
      </div>
    </footer>
  );
};
