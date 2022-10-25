import React from "react";
import "./AboutMe.scss";
import Mark from "../../assets/images/mark.jpeg";
import Skills from "../Skills/Skills";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__heading">ABOUT ME</h2>
      <div className="about-me__content">
        <img className="about-me__image" src={Mark} alt="Headshot of Mark Lawson" />

        <div className="about-me__text">
          <p>
            Having recently graduated from a 12 week full-stack developer course run by{" "}
            <a href="https://nology.io/" target="_blank" rel="noreferrer">
              _nology
            </a>
            , I’m now looking for my first role as a junior developer.
          </p>
          <p>Nulla ac praesent tempor, orci sit nunc eget. Aliquam urna nunc, viverra sed tortor non. Id at pellentesque mauris at tincidunt venenatis urna mus.</p>
          <p>Nulla ac praesent tempor, orci sit nunc eget. Aliquam urna nunc, viverra sed tortor non. Id at pellentesque mauris at tincidunt venenatis urna mus.</p>
          <p>Nulla ac praesent tempor, orci sit nunc eget. Aliquam urna nunc, viverra sed tortor non. Id at pellentesque mauris at tincidunt venenatis urna mus.</p>
        </div>

        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
