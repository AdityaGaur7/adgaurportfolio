import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/ProjectData.json";
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
        <h3 className="project-title proj-title">PROJECTS</h3>
        <div className="projects-gallery" role="list">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              role="button"
              tabIndex={0}
              aria-label={`Open project ${project.title}`}
              onClick={() => handleProjectClick(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleProjectClick(index);
                }
              }}
            >
              <img
                src={`/${project.image}`}
                alt={project.title}
                loading="lazy"
                decoding="async"
              />
              <div className="project-info">
                <h1 className="project-title-text">{project.title}</h1>
                <p className="client-info">{project.client}</p>
                <p className="date-info">{project.date}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="show-more-btn" onClick={toggleShowAll}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}

export default Projects;
