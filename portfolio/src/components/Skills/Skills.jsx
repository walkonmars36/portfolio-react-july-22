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
          <p>Git/Github</p>
          <FontAwesomeIcon icon={faGithubAlt} size="3x" />
        </div>
        <div className="technical-skills__icon">
          <p>HTML 5</p>
          <FontAwesomeIcon icon={faHtml5} size="3x" />
        </div>
        <div className="technical-skills__icon">
          <p>CSS 3</p>
          <FontAwesomeIcon icon={faCss3Alt} size="3x" />
        </div>
        <div className="technical-skills__icon">
          <p>Javascript</p>
          <FontAwesomeIcon icon={faJsSquare} size="3x" />
        </div>
        <div className="technical-skills__icon">
          <p>SCSS/Sass</p>
          <FontAwesomeIcon icon={faSass} size="3x" />
        </div>

        <div className="technical-skills__icon">
          <p>React</p>
          <FontAwesomeIcon icon={faReact} size="3x" />
        </div>

        <div className="technical-skills__icon">
          <p>Java</p>
          <FontAwesomeIcon icon={faJava} size="3x" />
        </div>

        <div className="technical-skills__icon">
          <p>Spring</p>
          <FontAwesomeIcon icon={faJava} size="3x" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
