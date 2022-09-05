import React from "react";
import "./Header.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import OpenBracket from "../OpenBracket/OpenBracket";
import ClosingBracket from "../ClosingBracket/ClosingBracket";
import {useState, useEffect} from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      {show && (
        <header className="header">
          <div className="header__title">
            <OpenBracket />
            <h5 className="header__title-name">MarkLawson</h5>
            <ClosingBracket />
          </div>

          <span className="header__mobile-nav" alt="mobile-menu">
            <FontAwesomeIcon icon="bars" />
          </span>
        </header>
      )}
    </div>
  );
};

export default Header;
