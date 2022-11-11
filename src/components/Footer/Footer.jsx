import React from "react";
import Obfuscate from "react-obfuscate";

import "./Footer.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-content">
      <h2 className="footer-content__heading">Get in touch</h2>

      <div className="footer-content__links">
        <div className="footer-content__social-icons">
          <a href="https://github.com/walkonmars36" target="_blank" rel="no noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href="https://www.linkedin.com/in/mark-lawson-001/" target="_blank" rel="no noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </div>
        <div className="footer-content__email">
          <Obfuscate email="walkonmars@gmail.com" className="footer-content__email-address"></Obfuscate>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
