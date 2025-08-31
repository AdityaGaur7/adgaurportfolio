import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/ProjectData.json";
import { FiExternalLink } from "react-icons/fi";
import "../styles/Projects.css";

function Projects() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 10);

  const handleProjectClick = (projectIndex) => {
    navigate(`/project/${projectIndex}`);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="projectsection">
        <h3 className="project-title proj-title">PROJECTS:</h3>
        <div className="projects-gallery">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="project-card monochrome"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              onClick={() => handleProjectClick(index)}
            >
              <div className="project-info">
                <h1 className="project-title-text">{project.title}</h1>
                <p className="client-info">{project.client}</p>
                <p className="date-info">{project.date}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="external-link"
                  title="Open project"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="show-more-btn" onClick={toggleShowAll}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
      <hr />
    </>
  );
}

export default Projects;
