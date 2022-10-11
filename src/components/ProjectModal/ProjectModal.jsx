import {useRef} from "react";
import "./ProjectModal.scss";
import Overlay from "../Overlay/Overlay";

import {CSSTransition} from "react-transition-group";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

const ProjectModal = ({closeModal, showModal, image, thumbnail, title, longDesc, stack, shortDesc}) => {
  const nodeRef = useRef(null);

  showModal ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <>
      {showModal && <Overlay />}
      <CSSTransition in={showModal} timeout={500} classNames="open-modal" unmountOnExit nodeRef={nodeRef}>
        <div className="project-modal" onClick={closeModal} ref={nodeRef}>
          <button className="close" onClick={closeModal}>
            &times;
          </button>

          <div className="project-modal__content">
            <h3 className="project-modal__title">{title}</h3>
            <h5 className="project-modal__short-desc">{shortDesc}</h5>
            <p className="project-modal__long-desc">{longDesc}</p>

            <div className="project-modal__info">
              <div>
                {stack.map((item, index) => (
                  <p key={index} className="project-modal__stack">
                    {item}
                  </p>
                ))}
              </div>
              <img src={thumbnail} alt={title} className="project-modal__thumbnail" />
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ProjectModal;
