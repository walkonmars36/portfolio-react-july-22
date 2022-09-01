import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <ContactForm />
      <div className="footer">
        <div className="footer__logos">
          <img src="./assets/github.png" alt="github logo and link" />

          <img src="./assets/linkedin.png" alt="linkedin logo and link" />

          <img src="./assets/cv.png" alt="cv link" />
        </div>
        <div className="footer__email">
          {" "}
          <a href="mailto:walkonmars@gmail.com" class="footer__email">
            walkonmars@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
