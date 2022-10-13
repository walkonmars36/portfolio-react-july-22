import React from "react";
import "./Skills.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubAlt, faHtml5, faCss3Alt, faJsSquare, faSass, faReact, faJava} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="technical-skills">
      <h2 className="technical-skills__heading">Technical Skills</h2>
      <p>Below are the technologies I have used so far, I expect to add to these as I am always keen to learn new methods and blah blah blah! </p>
      <div className="technical-skills__logos">
        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Git/Github</p>
          <FontAwesomeIcon icon={faGithubAlt} />
        </div>
        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">HTML 5</p>
          <FontAwesomeIcon icon={faHtml5} />
        </div>
        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">CSS 3</p>
          <FontAwesomeIcon icon={faCss3Alt} />
        </div>
        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Javascript</p>
          <FontAwesomeIcon icon={faJsSquare} />
        </div>
        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">SCSS/Sass</p>
          <FontAwesomeIcon icon={faSass} />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">React</p>
          <FontAwesomeIcon icon={faReact} />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Java</p>
          <FontAwesomeIcon icon={faJava} />
        </div>

        <div className="technical-skills__icon">
          <p className="technical-skills__icon-title">Spring</p>
          <FontAwesomeIcon icon={faJava} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
