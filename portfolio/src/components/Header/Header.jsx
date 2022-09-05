import React from "react";
import "./Header.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import OpenBracket from "../OpenBracket/OpenBracket";
import ClosingBracket from "../ClosingBracket/ClosingBracket";
import {useState, useEffect} from "react";

const Header = ({handleToggleNav}) => {
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
      {showHeader && (
        <header className="header">
          <div className="header__title">
            <OpenBracket />
            <h5 className="header__title-name">MarkLawson</h5>
            <ClosingBracket />
          </div>

          <span className="header__menu-btn" alt="mobile-menu">
            <FontAwesomeIcon icon="bars" onClick={handleToggleNav} />
          </span>
        </header>
      )}
    </div>
  );
};

export default Header;
