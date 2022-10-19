import {useRef} from "react";
import "./ProjectModal.scss";
import Overlay from "../Overlay/Overlay";

import {CSSTransition} from "react-transition-group";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons";

const ProjectModal = ({project, showModal, closeModal}) => {
  const {strTitle, strShortDesc, strLongDesc, strGithub, strLiveSite, strThumbnail, strStack} = project;

  const nodeRef = useRef(null);

  return (
    <>
      {showModal && <Overlay />}
      <CSSTransition in={showModal} timeout={500} classNames="open-modal" unmountOnExit nodeRef={nodeRef}>
        <div className="project-modal" onClick={closeModal} ref={nodeRef}>
          <div className="project-modal__content">
            <button className="project-modal__content-close" onClick={closeModal}>
              &times;
            </button>

            <h3 className="project-modal__title">{strTitle}</h3>
            <h5 className="project-modal__short-desc">{strShortDesc}</h5>

            <ul className="project-modal__stack">
              {strStack.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <div className="project-modal__description">
              <div className="project-modal__description-text">
                <p className="project-modal__long-desc">{strLongDesc}</p>

                <div className="project-modal__links">
                  <a href={strGithub} className="project-modal__link" target="_blank" rel="no noreferrer" onClick={closeModal}>
                    Read more on Github <FontAwesomeIcon icon={faGithubAlt} className="project-modal__link-icon" />
                  </a>
                  {strLiveSite !== "" && (
                    <a href={strLiveSite} className="project-modal__link" target="_blank" rel="no noreferrer" onClick={closeModal}>
                      View live site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-modal__thumbnail">
                <img src={strThumbnail} alt={strTitle} className="project-modal__thumbnail-img" />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ProjectModal;
