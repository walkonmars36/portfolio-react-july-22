import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <section class="technical-skills">
      <h2 class="technical-skills__header">
        <span class="undershadow">Technical Skills</span>{" "}
      </h2>
      <div class="technical-skills__logos">
        <img alt="git logo" class="technical-skills__image--git" />

        <img src="./assets/html.png" alt="html 5 logo" class="technical-skills__image--html" />

        <img src="./assets/css.png" alt="css 3 logo" class="technical-skills__image--css" />

        <img src="./assets/js.png" alt="javascript logo" class="technical-skills__image--js" />

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
