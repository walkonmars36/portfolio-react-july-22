import React from "react";
import "./ProjectModal.scss";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

const ProjectModal = ({closeModal, showModal, image, title, longDesc, stack, shortDesc}) => {
  showModal ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <>
      {/* <div className={showModal ? overlay : "hide"} onClick={closeModal} /> */}
      <div className={showModal ? "project-modal" : "project-modal"} onClick={closeModal}>
        <button className="close" onClick={closeModal}>
          &times;
        </button>
        <div className="project-modal__top-section">
          <h2 className="project-modal__top-section-title">{title}</h2>
        </div>

        <div className="project-modal__content">
          <h3 className="project-modal__short-desc">{shortDesc}</h3>

          <p className="project-modal__long-desc">{longDesc}</p>
          <ul>
            <li>{stack[0]}</li>
            <li>{stack[1]}</li>
            <li>{stack[2]}</li>
            <li>{stack[3]}</li>
          </ul>
          {/* <img className="project-modal__top-section__image" src={image} alt={shortDesc} /> */}
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
