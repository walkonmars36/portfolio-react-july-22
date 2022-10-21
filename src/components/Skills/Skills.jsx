import React from "react";
import "./Skills.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGit, faHtml5, faCss3Alt, faJsSquare, faSass, faReact} from "@fortawesome/free-brands-svg-icons";
import SpringIcon from "../SpringIcon/SpringIcon";
import JavaIcon from "../JavaIcon/JavaIcon";
import MySql from "../MySql/MySql";
import Wordpress from "../Wordpress/Wordpress";
import Shopify from "../Shopify/Shopify";
import Python from "../Python/Python";

const Skills = () => {
  return (
    <div className="technical-skills">
      <h2 className="technical-skills__heading">Technical Skills</h2>
      <p className="technical-skills__text">Below are the technologies I have used so far, I expect to add to these as I am always keen to learn new methods and blah blah blah! </p>

      <div className="technical-skills__logos">
        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">HTML 5</p>
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">CSS 3</p>
          <FontAwesomeIcon icon={faCss3Alt} />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">SCSS</p>
          <FontAwesomeIcon icon={faSass} className="technical-skills__icon-sass" />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Git/Github</p>
          <FontAwesomeIcon icon={faGit} />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Javascript</p>
          <FontAwesomeIcon icon={faJsSquare} />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">React</p>
          <FontAwesomeIcon icon={faReact} />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Python</p>
          <Python />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Java</p>
          <JavaIcon />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Spring</p>
          <SpringIcon />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">MySql</p>
          <MySql />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Wordpress</p>
          <Wordpress />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Shopify</p>
          <Shopify />
        </div>
      </div>
    </div>
  );
};

export default Skills;
