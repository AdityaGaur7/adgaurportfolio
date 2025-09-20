import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiExternalLink, FiArrowLeft, FiTag, FiCode } from "react-icons/fi";
import projectsData from "../data/ProjectData.json";
import "../styles/ProjectDetail.css";
import { FiCalendar } from "react-icons/fi";

function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectIndex = parseInt(projectId);
    if (projectIndex >= 0 && projectIndex < projectsData.length) {
      setProject(projectsData[projectIndex]);
    }
  }, [projectId]);

  const handleBack = () => {
    navigate("/project");
  };

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-not-found">
          <h2>Project Not Found</h2>
          <button onClick={handleBack} className="back-button">
            <FiArrowLeft size={20} />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      {/* Header Section */}
      <div className="project-detail-header">
        <button onClick={handleBack} className="back-button">
          <FiArrowLeft size={20} />
          Back to Projects
        </button>

        <div className="project-hero">
          <div className="project-hero-content">
            <div className="project-hero-text">
              <h1 className="project-title">{project.title}</h1>
              <p className="project-subtitle">{project.description}</p>

              <div className="project-meta">
                <div className="meta-item">
                  <FiTag size={16} />
                  <span>{project.client}</span>
                </div>
                <div className="meta-item">
                  <FiCalendar size={16} />
                  <span>{project.date}</span>
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-project-btn"
              >
                <FiExternalLink size={20} />
                {project.link}
              </a>
            </div>

            <div className="project-hero-image">
              <img
                src={`/${project.image}`}
                alt={project.title}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="project-detail-content">
        <div className="content-grid">
          {/* Main Content */}
          <div className="main-content">
            <section className="content-section">
              <h2>Project Overview</h2>
              <p className="project-long-description">
                {project.longDescription}
              </p>
            </section>

            <section className="content-section">
              <h2>Key Features</h2>
              <div className="features-grid">
                {project.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <FiCode size={20} />
                    </div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <div className="sidebar-section">
              <h3>Technologies Used</h3>
              <div className="tech-grid">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Project Tags</h3>
              <div className="tags-grid">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Project Details</h3>
              <div className="project-details">
                <div className="detail-item">
                  <strong>Client:</strong>
                  <span>{project.client}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
