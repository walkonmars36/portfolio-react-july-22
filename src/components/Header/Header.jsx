import {useState, useEffect, useRef} from "react";
import "./Header.scss";

import OpenBracket from "../OpenBracket/OpenBracket";
import ClosingBracket from "../ClosingBracket/ClosingBracket";

import Hamburger from "hamburger-react";
import {CSSTransition} from "react-transition-group";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

const Header = ({handleToggleNav, navOpen, setNavOpen}) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  navOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    // <CSSTransition in={showHeader} timeout={1000} classNames="show-header" unmountOnExit nodeRef={nodeRef}>
    <header className="header" ref={nodeRef}>
      <div className="header__title">
        <OpenBracket />
        <h5 className="header__title-name">MarkLawson</h5>
        <ClosingBracket />
      </div>

      <span className="header__menu" alt="menu-button">
        <Hamburger rounded size={25} color="#f5f5f5" label="Show menu" toggled={navOpen} toggle={setNavOpen} onToggle={handleToggleNav} />
      </span>
    </header>
    // </CSSTransition>
  );
};

export default Header;
