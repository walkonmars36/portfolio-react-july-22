import React from "react";
import "./AboutMe.scss";
import Mark from "../../assets/images/mark.webp";
import Skills from "../Skills/Skills";

const AboutMe = () => {
  return (
    <section className="about-me">
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
          <p>
            In 2006 I taught myself HTML and CSS then in 2007, along with my wife, I setup one of the first t-shirt printers in the UK to focus on using only ethically produced garments and eco-friendly printing practices. Over the following years I
            built several simple websites to promote our print business.
          </p>
          <p>
            At that time the t-shirt printing industry was very old school and company websites, if they existed at all, were dull. I recognised that to stand apart from the crowd and attract the type of clients I wanted, my website design needed to
            be clean, with eye-catching bold images, be easy to navigate and have interesting content. Through this I became interested in the power of good design and would spend hours browsing websites to determine what worked, what didn&#39;t and
            why.
          </p>
          <p>
            When I started an online shop to promote my design range I first used Wordpress/Woocommerce and then Shopify. Whilst these platforms allowed me to produce a decent ecommerce site I felt frustrated that I wasn&#39;t able to control every
            aspect of the build and would always delve into the code to try and change it.
          </p>

          <p>
            Fast forward to 2020 and with the immense impact of the Covid pandemic, the business, like many, was greatly affected and I found myself re-evaluating my situation. I recognised that my love of web design and development was still strong.
            I&#39;d never been happier than when working on websites. So, since March 2020 I have become more engrossed in web development, studying through online courses and also the 12 week full stack boot camp which ran from May - July 2022.
          </p>

          <p>Since completing the bootcamp I have been practising and expanding my knowledge of JavaScript and React and I am currently learning Python and Django to expand my knowledge of backend development.</p>

          <p>My aim is to develop responsive and accessible applications that are performant, scalable and thoughtfully designed for accessibility and maintainability.</p>
          <p>I&#39;m particularly interested in working in an ethical environment and using my newly developed skills for good. Working with not for profits, charities or environmental agencies.</p>
        </div>

        <Skills />
      </div>
    </section>
  );
};

export default AboutMe;
