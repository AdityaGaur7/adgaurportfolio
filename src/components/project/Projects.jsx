import React, { useEffect } from "react";
import projectsData from "./ProjectData";
import VanillaTilt from "vanilla-tilt";
import './Projects.css'; // Make sure you include the CSS file

function Projects() {
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
  }, []);

  return (
    <>
      <div className="projectsection">
        <h3 className="project-title proj-title">PROJECTS:</h3>
        <div className="projects-gallery">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="cd">
                <img src={project.image} alt={project.title} />
                <button>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    OPEN
                    <i className="fa-solid fa-arrow-up-right"></i>
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
      </div>
      <hr />
    </>
  );
}

export default Projects;
