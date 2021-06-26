import React, { useState, useEffect } from "react";
// Import Animation
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";
// import Router
import { useHistory } from "react-router-dom";
// Import API
import { ProjectsState } from "../Projectstate";
// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// Projects Details
function ProjectsDetails() {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(ProjectsState);
  const [project, setProject] = useState(null);
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      {project && (
        <div>
          {/* First Section */}
          <section className="first-details">
            <img src={project.mainImg} alt="Img of Project" />
            <div className="text-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <a
              href={project.urlWebsite}
              className="demo"
              target="_blank"
              rel="noreferrer"
            >
              See Demo
            </a>
          </section>
          {/* Second Section About */}
          <section className="about">
            <div className="about-text">
              <h2>{project.textSecondaryImg[0].title}</h2>
              <div className="line"></div>
              <p>{project.textSecondaryImg[0].description}</p>
              <h2>{project.textSecondaryImg[1].title}</h2>
              <div className="line"></div>
              <p>{project.textSecondaryImg[1].description}</p>
              <h2>{project.textSecondaryImg[2].title}</h2>
              <div className="line"></div>
              <p>{project.textSecondaryImg[2].description}</p>
            </div>
            <div className="about-img">
              <img src={project.secondaryImg} alt="Img of Project" />
            </div>
          </section>
          {/* Section Options */}
          <section className="options">
            <ul>
              {project.keyFeatures.map((proj) => (
                <li key={proj}>
                  <FontAwesomeIcon icon={faCheck} />
                  {proj}
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </motion.div>
  );
}

export default ProjectsDetails;
