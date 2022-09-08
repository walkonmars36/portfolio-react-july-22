import {React, useState} from "react";
import "./Projects.scss";
import ProjectModal from "../ProjectModal/ProjectModal";
import {CSSTransition} from "react-transition-group";

const Projects = ({id, title, shortDesc, longDesc, image, link, stack}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="projects" id={id}>
        <div className="projects-item">
          <img src={image} alt={shortDesc} />

          <div className="projects-item__content">
            <h3 className="projects-item__title">{title}</h3>

            <p className="projects-item__desc">{stack}</p>
            {/* {!showModal && ( */}
            <button className="projects-item__btn" onClick={openModal}>
              View Project
            </button>
            {/* )} */}

            <CSSTransition in={showModal} timeout={500} classNames="open-modal" unmountOnExit>
              <ProjectModal
                // prettier-ignore
                closeModal={closeModal}
                showModal={showModal}
                image={image}
                title={title}
                longDesc={longDesc}
                link={link}
                shortDesc={shortDesc}
                stack={stack}
              />
            </CSSTransition>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
