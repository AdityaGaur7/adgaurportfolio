import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "./ProjectData";
import VanillaTilt from "vanilla-tilt";
import { FiExternalLink } from "react-icons/fi";
import "./Projects.css"; // Make sure you include the CSS file

function Projects() {
  const navigate = useNavigate();
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
              className="project-card"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              onClick={() => handleProjectClick(index)}
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
                <p className="client-info">{project.client}</p>
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
