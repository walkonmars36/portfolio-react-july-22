import React from "react";
import "./Nav.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import {CSSTransition} from "react-transition-group";

const Nav = ({handleToggleNav}) => {
  return (
    <nav>
      <FontAwesomeIcon icon={faX} className="closing-x" onClick={handleToggleNav} />
      <ul>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
