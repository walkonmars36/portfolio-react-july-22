import React from "react";
import "./Header.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <header class="header">
        <div class="header__logo-name">
          <h3 class="header__title">mark lawson</h3>
        </div>

        <span class="header__mobile-nav" alt="mobile-menu">
          <FontAwesomeIcon icon="bars" />
        </span>
      </header>
    </div>
  );
};

export default Header;
