import React, { useEffect, useState } from "react";
import projectsData from "./ProjectData";
import VanillaTilt from "vanilla-tilt";
import { FiExternalLink } from "react-icons/fi";
import "./Projects.css"; // Make sure you include the CSS file

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 6);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".cd"), {
      glare: true,
      "max-glare": "0.50",
      max: 15,
      speed: 300,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      reset: true,
      "reset-to-start": true,
    });
  }, [showAll]); // Re-initialize when showAll changes

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
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
              className="project-card"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              onClick={() => handleProjectClick(project)}
            >
              <div className="cd">
                <img src={project.image} alt={project.title} />
                <button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={20} />
                  </a>
                </button>
              </div>
              <div className="project-info">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="show-more-btn" onClick={toggleShowAll}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <h2>{selectedProject.title}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3>Description</h3>
                <p className="long-description">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div className="modal-section">
                <h3>Features</h3>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3>Technologies</h3>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Tags</h3>
                <div className="tech-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-button"
              >
                <FiExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
      <hr />
    </>
  );
}

export default Projects;
