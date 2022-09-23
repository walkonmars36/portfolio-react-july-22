import {useRef} from "react";
import "./Nav.scss";
import Scroll from "react-scroll";
import {CSSTransition} from "react-transition-group";

const Nav = ({handleNavOpen, showNav}) => {
  const nodeRef = useRef(null);
  const Link = Scroll.Link;

  return (
    <CSSTransition in={showNav} timeout={1000} classNames="open-nav" unmountOnExit nodeRef={nodeRef}>
      <nav>
        <ul ref={nodeRef}>
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
    </CSSTransition>
  );
};

export default Nav;
