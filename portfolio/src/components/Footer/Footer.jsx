import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__logos">
        <img src="./assets/github.png" alt="github logo and link" />

        <img src="./assets/linkedin.png" alt="linkedin logo and link" />

        <img src="./assets/cv.png" alt="cv link" />
      </div>
      <div class="footer__email">
        {" "}
        <a href="mailto:walkonmars@gmail.com" class="footer__email">
          walkonmars@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
