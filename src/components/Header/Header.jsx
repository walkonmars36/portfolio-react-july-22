import React from "react";
import "./Header.scss";

import OpenBracket from "../OpenBracket/OpenBracket";
import ClosingBracket from "../ClosingBracket/ClosingBracket";
import {useState, useEffect} from "react";
import Hamburger from "hamburger-react";
import {CSSTransition} from "react-transition-group";

const Header = ({handleToggleNav, navOpen, setNavOpen}) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <div>
      <CSSTransition in={showHeader} timeout={500} classNames="show-header" unmountOnExit>
        <header className="header">
          <div className="header__title">
            <OpenBracket />
            <h5 className="header__title-name">MarkLawson</h5>
            <ClosingBracket />
          </div>

          <span className="header__menu" alt="mobile-menu">
            <Hamburger rounded size={25} color="#f5f5f5" label="Show menu" toggled={navOpen} toggle={setNavOpen} onToggle={handleToggleNav} />
          </span>
        </header>
      </CSSTransition>
    </div>
  );
};

export default Header;
