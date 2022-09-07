import React from "react";
import "./ProjectsList.scss";

import Projects from "../../components/Projects/Projects";
import LightBgTilt from "../../components/LightBgTilt/LightBgTilt";

const ProjectsList = ({projectsArray}) => {
  return (
    <>
      <div className="projects-list">
        <h2 className="projects-list__heading">My Projects</h2>
        <div className="projects-list__content">
          {projectsArray.map((project, index) =>
            // prettier-ignore
            <Projects 
                key={index}
                id={project.id} 
                title={project.strTitle}
                shortDesc={project.strShortDesc}
                longDesc={project.strLongDesc}
                image={project.strImage}
                link={project.strLink}
                stack={project.strStack}
                />
          )}
        </div>
      </div>
      <LightBgTilt />
    </>
  );
};

export default ProjectsList;
