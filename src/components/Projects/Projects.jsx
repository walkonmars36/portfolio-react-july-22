import {React, useState} from "react";
import "./Projects.scss";
import ProjectModal from "../ProjectModal/ProjectModal";

const Projects = ({id, title, shortDesc, longDesc, image, thumbnail, link, stack}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="projects">
      <div className="projects-item">
        <img src={image} alt={shortDesc} />

        <div className="projects-item__content">
          <h4 className="projects-item__title">{title}</h4>

          <div className="projects-item__content-stack">
            {stack.map((item, index) => (
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
            image={image}
            thumbnail={thumbnail}
            title={title}
            longDesc={longDesc}
            link={link}
            shortDesc={shortDesc}
            stack={stack}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
