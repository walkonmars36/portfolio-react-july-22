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
    <div className="portfolio" id="projects">
      <div className="portfolio__content">
        <h2 className="projects__heading">My Projects</h2>

        <div className="projects">
          {/* Project item 1 - FEATURED */}
          <figure className="projects__item featured">
            <img src={courseology} alt="featured portfolio item" />
            <figcaption>
              <h3 className="projects__title"> Memory-Game AKA Matching-Pairs </h3>
              <p className="projects__desc">A simple game made with HTML SCSS and Javascript.</p>
              {/* <a href="#" className="projects__link">
                Read More <i className="fas fa-arrow-right"></i>
              </a> */}
            </figcaption>

            {/* Project modal 1 - FEATURED  */}
            <div className="projects-modal">
              <button className="modal-button">
                <svg className="modal-button__close-x" viewbox="0 0 40 40">
                  <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                </svg>
              </button>

              <div className="projects-modal__header">
                <div className="projects-modal__title-box">
                  <h3 className="projects-modal__title">Memory-Game AKA Matching-Pairs</h3>
                  <p className="projects-modal__subtitle">A simple game made with HTML SCSS and Javascript.</p>
                </div>
              </div>
              {/* close modal header */}
              <div className="projects-modal__content">
                <p>For my first project using Javascript, I made a matching pairs game. The object is to find 6 pairs of dogs.</p>

                <p>
                  You can play the game{" "}
                  {/* <a href="https://walkonmars36.github.io/memory-game-matching-pairs/" className="projects-modal__link" target="_blank">
                    here
                  </a> */}
                  .{" "}
                </p>

                <div className="projects-modal__full-width">
                  <img src="./images/modal-pug.jpg" />{" "}
                </div>

                <h4>Screenshots from the game</h4>

                <div className="projects-modal__images">
                  <div className="projects-modal__img">
                    <img src="./images/modal-image-1.jpg" alt="featured project image" />
                  </div>

                  <div className="projects-modal__img">
                    <img src="./images/pairs-2.png" alt="featured project image" />
                  </div>

                  <div className="projects-modal__img">
                    <img src="./images/pairs-3.png" alt="featured project image" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!--close modal--> */}
          </figure>

          {/* <!--Project item 2 --> */}
          <figure className="projects__item">
            <img src={a} alt=" portfolio item" />
            <figcaption>
              <h3 className="projects__title"> Project A </h3>
              <p className="projects__desc">Short description goes here.</p>
              {/* <a href="#" className="projects__link">
                Read More <i className="fas fa-arrow-right"></i>
              </a> */}
            </figcaption>
          </figure>

          {/* <!--Project item 3  --> */}
          <figure className="projects__item">
            <img src={b} alt=" portfolio item" />
            <figcaption>
              <h3 className="projects__title"> Project B </h3>
              <p className="projects__desc">Short description goes here.</p>
              {/* <a href="#" className="projects__link">
                Read More <i className="fas fa-arrow-right"></i>
              </a> */}
            </figcaption>
          </figure>

          {/* <!--Project item 4--> */}
          <figure className="projects__item">
            <img src={c} alt=" portfolio item" />
            <figcaption>
              <h3 className="projects__title"> Project C </h3>
              <p className="projects__desc">Short description goes here.</p>
              {/* <a href="#" className="projects__link">
                Read More <i className="fas fa-arrow-right"></i>
              </a> */}
            </figcaption>
          </figure>

          {/* <!--Project item 5 --> */}
          <figure className="projects__item">
            <img src={d} alt=" portfolio item" />
            <figcaption>
              <h3 className="projects__title"> Project D </h3>
              <p className="projects__desc">Short description goes here.</p>
              {/* <a href="#" className="projects__link">
                Read More <i className="fas fa-arrow-right"></i>
              </a> */}
            </figcaption>
          </figure>
        </div>
      </div>
      <LightBgTilt />
    </div>
  );
};

export default Projects;
