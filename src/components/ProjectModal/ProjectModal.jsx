import {useRef} from "react";
import "./ProjectModal.scss";
import Overlay from "../Overlay/Overlay";

import {CSSTransition} from "react-transition-group";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

const ProjectModal = ({project, showModal, closeModal}) => {
  const {strTitle, strShortDesc, strLongDesc, strThumbnail, strStack} = project;

  const nodeRef = useRef(null);

  showModal ? disableBodyScroll(document) : enableBodyScroll(document);

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
            <p className="project-modal__long-desc">{strLongDesc}</p>

            <div className="project-modal__info">
              <div>
                {strStack.map((item, index) => (
                  <p key={index} className="project-modal__stack">
                    {item}
                  </p>
                ))}
              </div>
              <img src={strThumbnail} alt={strTitle} className="project-modal__thumbnail" />
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ProjectModal;
