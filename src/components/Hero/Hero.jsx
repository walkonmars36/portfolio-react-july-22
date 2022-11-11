import React from "react";
import BackgroundTilt from "../BackgroundTilt/BackgroundTilt";
import HeroBtn from "../HeroBtn/HeroBtn";
import "./Hero.scss";

const Hero = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero__title">
          <p className="hero__title-name">
            <span>Hi,</span> <br /> I'm Mark
          </p>
          <h1 className="hero__title-heading">A software developer based in Bristol.</h1>
        </div>
        <HeroBtn />
      </div>
      <BackgroundTilt />
    </section>
  );
};

export default Hero;
