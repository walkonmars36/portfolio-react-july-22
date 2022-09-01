import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Footer.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <ContactForm />
      <div>
        <div className="footer__social-icons">
          <span>
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </span>
          <span>
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </span>
        </div>
        <div className="footer__email">
          <a href="mailto:walkonmars@gmail.com" className="footer__email-address">
            walkonmars@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
