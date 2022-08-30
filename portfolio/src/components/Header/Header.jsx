import React from "react";
import "./Header.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import OpenBracket from "../OpenBracket/OpenBracket";
import ClosingBracket from "../ClosingBracket/ClosingBracket";

const Header = () => {
  return (
    <div>
      <header class="header">
        <div class="header__title">
          <OpenBracket />
          <h5 class="header__title-name">MarkLawson</h5>
          <ClosingBracket />
        </div>

        <span class="header__mobile-nav" alt="mobile-menu">
          <FontAwesomeIcon icon="bars" />
        </span>
      </header>
    </div>
  );
};

export default Header;
