import React from "react";
import "./Header.scss";

import OpenBracket from "../OpenBracket/OpenBracket";
import ClosingBracket from "../ClosingBracket/ClosingBracket";

import Hamburger from "hamburger-react";

import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

const Header = ({handleToggleNav, navOpen, setNavOpen}) => {
  navOpen ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <header className="header">
      <div className="header__title">
        <OpenBracket />
        <h5 className="header__title-name">MarkLawson</h5>
        <ClosingBracket />
      </div>

      <span className="header__menu" alt="menu-button">
        <Hamburger rounded size={25} color="#f5f5f5" label="Show menu" toggled={navOpen} toggle={setNavOpen} onToggle={handleToggleNav} />
      </span>
    </header>
  );
};

export default Header;
