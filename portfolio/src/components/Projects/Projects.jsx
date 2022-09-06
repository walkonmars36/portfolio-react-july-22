import React from "react";
import "./Projects.scss";

import a from "../../assets/images/projectA.png";
import b from "../../assets/images/projectB.png";
import c from "../../assets/images/projectC.png";
import d from "../../assets/images/projectD.png";
import LightBgTilt from "../LightBgTilt/LightBgTilt";
import courseology from "../../assets/images/courseology.png";

const Projects = () => {
  return (
    <>
      <div className="portfolio">
        <div className="portfolio__content">
          <h2 className="projects__heading">My Projects</h2>

          <div className="projects">
            {/* Project item 1 - FEATURED */}
            <figure className="projects__item featured">
              <img src={courseology} alt="featured portfolio item" />
              <figcaption>
                <h3 className="projects__title">_courseology</h3>
                <p className="projects__desc">A full stack app</p>
                {/* <a href="#" className="projects__link">
                Read More <i className="fas fa-arrow-right"></i>
              </a> */}
              </figcaption>

              {/* Project modal 1 - FEATURED  */}
            </figure>

            {/* <!--Project item 2 --> */}
            <figure className="projects__item">
              <img src={a} alt=" portfolio item" />
              <figcaption>
                <h3 className="projects__title"> Project A </h3>
                <p className="projects__desc">Short description goes here.</p>
              </figcaption>
            </figure>

            {/* <!--Project item 3  --> */}
            <figure className="projects__item">
              <img src={b} alt=" portfolio item" />
              <figcaption>
                <h3 className="projects__title"> Project B </h3>
                <p className="projects__desc">Short description goes here.</p>
              </figcaption>
            </figure>

            {/* <!--Project item 4--> */}
            <figure className="projects__item">
              <img src={c} alt=" portfolio item" />
              <figcaption>
                <h3 className="projects__title"> Project C </h3>
                <p className="projects__desc">Short description goes here.</p>
              </figcaption>
            </figure>

            {/* <!--Project item 5 --> */}
            <figure className="projects__item">
              <img src={d} alt=" portfolio item" />
              <figcaption>
                <h3 className="projects__title"> Project D </h3>
                <p className="projects__desc">Short description goes here.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <LightBgTilt />
    </>
  );
};

export default Projects;
