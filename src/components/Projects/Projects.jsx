import {React, useState} from "react";
import "./Projects.scss";
import ProjectModal from "../ProjectModal/ProjectModal";

const Projects = ({project}) => {
  const {strTitle, strShortDesc, strImage, strStack} = project;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="projects">
      <div className="projects-item">
        <img src={strImage} alt={strShortDesc} />

        <div className="projects-item__content">
          <h4 className="projects-item__title">{strTitle}</h4>

          <div className="projects-item__content-stack">
            {strStack.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>

          <button className="projects-item__btn" onClick={openModal}>
            View Project
          </button>

          <ProjectModal
            // prettier-ignore
            closeModal={closeModal}
            showModal={showModal}
            project={project}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
