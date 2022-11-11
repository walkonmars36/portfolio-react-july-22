import {useRef} from "react";
import "./Nav.scss";
import Scroll from "react-scroll";
import {CSSTransition} from "react-transition-group";
import {useEffect} from "react";

const Nav = ({handleNavLink, showNav}) => {
  const nodeRef = useRef(null);
  const Link = Scroll.Link;

  useEffect(() => {
    showNav ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
  });

  return (
    <CSSTransition in={showNav} timeout={1000} classNames="open-nav" unmountOnExit nodeRef={nodeRef}>
      <nav ref={nodeRef}>
        <ul>
          <li>
            <Link to="hero" smooth={true} duration={500} onClick={handleNavLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about-me" smooth={true} duration={500} onClick={handleNavLink}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={handleNavLink}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="footer" smooth={true} duration={500} onClick={handleNavLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </CSSTransition>
  );
};

export default Nav;
