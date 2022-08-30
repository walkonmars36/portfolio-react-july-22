import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div>
      <div class="hero__title">
        <p class="hero__title__name">Hey! I'm Mark</p>
        <h1 class="hero__title__heading">A software developer based in Bristol.</h1>
      </div>
      <div class="hero__button--container">
        <button class="hero__button">
          Take a look at my work
          <img class="hero__button--arrow" src="./assets/down-arrow.png" alt="down arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
