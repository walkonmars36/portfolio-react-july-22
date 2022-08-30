import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div class="hero__title">
        <p class="hero__title-name">
          <span>Hi,</span> <br /> I'm Mark
        </p>
        <h1 class="hero__title-heading">A software developer based in Bristol.</h1>
      </div>
      <div class="hero__button-container">
        <button class="btn ">Take a look at my work</button>
        {/* <img class="hero__button-arrow" src="./assets/down-arrow.png" alt="down arrow" /> */}
      </div>
    </div>
  );
};

export default Hero;
