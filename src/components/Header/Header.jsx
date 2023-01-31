import React from "react";
import "./Header.scss";
import Scroll from "react-scroll";

import OpenBracket from "../OpenBracket/OpenBracket";
import ClosingBracket from "../ClosingBracket/ClosingBracket";

import Hamburger from "hamburger-react";

const Header = ({handleToggleNav, navOpen, setNavOpen}) => {
  const Link = Scroll.Link;
  return (
    <header className="header">
      <div className="header__title">
        <OpenBracket />
        <h5 className="header__title-name">
          <Link to="hero" smooth={true} duration={500}>
            MarkLawson
          </Link>
        </h5>
        <ClosingBracket />
      </div>

      <span className="header__menu" alt="menu-button">
        <Hamburger rounded size={25} color="#f5f5f5" label="Show menu" toggled={navOpen} toggle={setNavOpen} onToggle={handleToggleNav} />
      </span>
    </header>
  );
};

export default Header;
