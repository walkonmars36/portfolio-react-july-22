import React from "react";
import "./Header.scss";
import brackets from "../../assets/images/brackets.png";
import hamburger from "../../assets/images/mobile-nav.png";

const Header = () => {
  return (
    <div>
      <header class="header">
        <div class="header__logo-name">
          <img src={brackets} alt="markup brackets" />
          <h3 class="header__title">Mark Lawson</h3>
        </div>

        <img class="header__mobile-nav" src={hamburger} alt="mobile-menu" />

        <nav class="header__main-nav">
          <a href="#home" class="header__main-nav--link">
            Home
          </a>

          <a href="#skills" class="header__main-nav--link">
            Skills
          </a>

          <a href="#projects" class="header__main-nav--link">
            Projects
          </a>

          <a href="#about-me" class="header__main-nav--link">
            About Me
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
