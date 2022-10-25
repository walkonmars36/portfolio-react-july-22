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
      <p className="technical-skills__text">
        This site is built in React and serves two purposes, as my portfolio and a project in it&#39;s own right. You can view the source code on{" "}
        <a className="technical-skills__github" href="https://github.com/walkonmars36/portfolio-react-july-22" target="_blank" rel="noreferrer">
          Github
        </a>{" "}
      </p>

      <p className="technical-skills__text">Below are the technologies I&#39;ve used to build this site, CMS's I've used, along with skills I developed during my time at _nology. </p>

      <p className="technical-skills__text">At the moment I am learning Python</p>

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
