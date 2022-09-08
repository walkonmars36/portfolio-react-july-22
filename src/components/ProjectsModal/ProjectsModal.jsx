import React from "react";
import "./ProjectsModal.scss";

const ProjectsModal = () => {
  return (
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
  );
};

export default ProjectsModal;
