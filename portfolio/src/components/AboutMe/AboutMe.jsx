import React from "react";
import "./AboutMe.scss";
import Mark from "../../assets/images/mark.jpeg";
import Skills from "../Skills/Skills";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__heading">ABOUT ME</h2>
      <div className="about-me__content">
        <img className="about-me__image" src={Mark} alt="mark" />
        <p className="about-me__text">Nulla ac praesent tempor, orci sit nunc eget. Aliquam urna nunc, viverra sed tortor non. Id at pellentesque mauris at tincidunt venenatis urna mus.</p>
        <p className="about-me__text">Nulla ac praesent tempor, orci sit nunc eget. Aliquam urna nunc, viverra sed tortor non. Id at pellentesque mauris at tincidunt venenatis urna mus.</p>
        <p className="about-me__text">Nulla ac praesent tempor, orci sit nunc eget. Aliquam urna nunc, viverra sed tortor non. Id at pellentesque mauris at tincidunt venenatis urna mus.</p>
        <p className="about-me__text">Nulla ac praesent tempor, orci sit nunc eget. Aliquam urna nunc, viverra sed tortor non. Id at pellentesque mauris at tincidunt venenatis urna mus.</p>

        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
