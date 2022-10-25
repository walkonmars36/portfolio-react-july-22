import React from "react";
import "./AboutMe.scss";
import Mark from "../../assets/images/mark.webp";
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
            <a className="about-me__nology" href="https://nology.io/" target="_blank" rel="noreferrer">
              _nology
            </a>
            , I&#39;m now looking for my first role as a junior developer.
          </p>
          <p>I first taught myself HTML and CSS around 16 years ago, I built some static sites and also spent some time in the development team at Bristol City College helping to migrate the content of their website to a new CMS.</p>
          <p>
            The timing wasn&#39;t right to pursue development at that time and with a growing awareness of environmental issues and ethical living, in 2007 I started one of the first t-shirt printing companies in the UK to focus solely on using
            environmentally safe inks and ethically produced garments and actively promoted awareness of organic cotton production and fair treatment of workers to my clients.
          </p>
          <p>During the following years I built several websites with HTML and CSS along with e-commerce sites using Wordpress and Shopify, as well as operating market stalls at huge Christmas markets and Glastonbury Festival.</p>
          <p>
            Fast forward to 2020 and struck by the COVID pandemic I found myself re-evaluating my life. The t-shirt business had been all consuming and fun, but ultimately unfulfilling. The love of web design and development had never gone away, so I
            resolved to see how far I could take it.
          </p>
          <p>I&#39;m particularly interested in working in an ethical environment and using my newly developed skills for good. Working with not for profits, charities or environmental agencies.</p>
        </div>

        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
