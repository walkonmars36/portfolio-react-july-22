import React from "react";
import "./Skills.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubAlt, faHtml5, faCss3Alt, faJsSquare} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section class="technical-skills">
      <h2 class="technical-skills__header">Technical Skills</h2>
      <div class="technical-skills__logos">
        <span>
          <p>Git/Github</p>
          <FontAwesomeIcon icon={faGithubAlt} size="3x" className="technical-skills__icon" />
        </span>

        <span>
          <p>HTML 5</p>
          <FontAwesomeIcon icon={faHtml5} size="3x" className="technical-skills__icon" />
        </span>

        <span>
          <p>CSS 3</p>
          <FontAwesomeIcon icon={faCss3Alt} size="3x" className="technical-skills__icon" />
        </span>

        <span>
          <p>Javascript</p>
          <FontAwesomeIcon icon={faJsSquare} size="3x" className="technical-skills__icon" />
        </span>

        <img src="./assets/sass.png" alt="scss logo" class="technical-skills__image--scss" />

        <img src="./assets/bem.png" alt="bem logo" class="technical-skills__image--bem" />

        <img src="./assets/react.png" alt="react logo" class="technical-skills__image--react" />

        <img src="./assets/java.png" alt="java logo" class="technical-skills__image--java" />

        <img src="./assets/spring boot.png" alt="spring boot logo" class="technical-skills__image--spring-boot" />
      </div>
    </section>
  );
};

export default Skills;
