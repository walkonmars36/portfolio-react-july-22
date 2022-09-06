import React from "react";
import "./Projects.scss";

const Projects = ({id, title, shortDesc, longDesc, image, link}) => {
  console.log(image, title, shortDesc, longDesc, link);

  return (
    <>
      <div className="projects">
        <div className="projects-item">
          <img src={image} alt={shortDesc} />
          <div className="projects-item__content">
            <h3 className="projects-item__title">{title}</h3>
            <p className="projects-item__desc">{shortDesc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
