import React from "react";
import "./Projects.scss";

import a from "../../assets/images/projectA.png";
import b from "../../assets/images/projectB.png";
import c from "../../assets/images/projectC.png";
import d from "../../assets/images/projectD.png";

const Projects = ({id, title, shortDesc, longDesc, image, link}) => {
  return (
    <>
      <div className="projects">
        {/* Project item 1 - FEATURED */}
        {/* <figure className="projects__item featured">
          <img src={strImage} alt="featured portfolio item" />
          <figcaption>
            <h3 className="projects__title">{strTitle}</h3>
            <p className="projects__desc">{strShortDesc}</p>
          </figcaption>
        </figure> */}

        <figure className="projects__item">
          <img src={image} alt=" portfolio item" />
          <figcaption>
            <h3 className="projects__title">{title}</h3>
            <p className="projects__desc">{shortDesc}</p>
          </figcaption>
        </figure>

        {/* <figure className="projects__item">
          <img src={b} alt=" portfolio item" />
          <figcaption>
            <h3 className="projects__title"> Project B </h3>
            <p className="projects__desc">Short description goes here.</p>
          </figcaption>
        </figure>

        <figure className="projects__item">
          <img src={c} alt=" portfolio item" />
          <figcaption>
            <h3 className="projects__title"> Project C </h3>
            <p className="projects__desc">Short description goes here.</p>
          </figcaption>
        </figure>

        <figure className="projects__item">
          <img src={d} alt=" portfolio item" />
          <figcaption>
            <h3 className="projects__title"> Project D </h3>
            <p className="projects__desc">Short description goes here.</p>
          </figcaption>
        </figure> */}
      </div>
    </>
  );
};

export default Projects;
