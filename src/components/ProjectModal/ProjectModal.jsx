import {useRef} from "react";
import "./ProjectModal.scss";
// import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import {CSSTransition} from "react-transition-group";

const ProjectModal = ({closeModal, showModal, image, title, longDesc, stack, shortDesc}) => {
  // showModal ? disableBodyScroll(document) : enableBodyScroll(document);
  showModal ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
  const nodeRef = useRef(null);

  return (
    <>
      {/* <div className={showModal ? overlay : "hide"} onClick={closeModal} /> */}
      <CSSTransition in={showModal} timeout={500} classNames="open-modal" unmountOnExit nodeRef={nodeRef}>
        <div className={showModal ? "project-modal" : "project-modal"} onClick={closeModal} ref={nodeRef}>
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
      </CSSTransition>
    </>
  );
};

export default ProjectModal;
