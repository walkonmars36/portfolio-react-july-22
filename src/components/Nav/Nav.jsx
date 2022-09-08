import React from "react";
import "./Nav.scss";
import Scroll from "react-scroll";
const Link = Scroll.Link;

const Nav = ({handleNavOpen}) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="hero" smooth={true} duration={500} onClick={handleNavOpen}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about-me" smooth={true} duration={500} onClick={handleNavOpen}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={handleNavOpen}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={handleNavOpen}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
