import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  GoCheckCircle,
  GoArrowLeft,
  GoCalendar,
  GoLocation,
  GoLinkExternal,
} from "react-icons/go";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaTools,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";
import "../styles/ExperienceDetail.css";
import experienceData from "../data/Experience.json";

const ExperienceDetail = () => {
  const { experienceId } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState(null);

  // Extended experience data with more details

  useEffect(() => {
    const foundExperience = experienceData.find(
      (exp) => exp.id === experienceId
    );
    if (foundExperience) {
      setExperience(foundExperience);
    } else {
      navigate("/about");
    }
  }, [experienceId, navigate]);

  if (!experience) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="experience-detail">
      <div className="experience-detail-container">
        {/* Header Section */}
        <div className="experience-header">
          <button className="back-button" onClick={() => navigate("/")}>
            <GoArrowLeft /> Back to Experience
          </button>
          <div className="experience-title-section">
            <div className="experience-title-content">
              <h1>{experience.title}</h1>
              <h2>{experience.company}</h2>
              <div className="experience-meta">
                <span className="meta-item">
                  <GoCalendar /> {experience.date}
                </span>
                <span className="meta-item">
                  <GoLocation /> {experience.location}
                </span>
                <span className="meta-item">
                  <FaChartLine /> {experience.duration}
                </span>
                <span className="meta-item">
                  <FaExternalLinkAlt />{" "}
                  <a
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {experience.url}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="experience-content">
          {/* Overview Section */}
          <section className="content-section">
            <h3>
              <FaLightbulb /> Overview
            </h3>
            <p>{experience.detailedDescription}</p>
          </section>

          {/* Key Responsibilities */}
          <section className="content-section">
            <h3>
              <FaCode /> Key Responsibilities
            </h3>
            <ul className="responsibilities-list">
              {experience.keyResponsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </section>

          {/* Technologies Used */}
          <section className="content-section">
            <h3>
              <FaTools /> Technologies & Tools
            </h3>
            <div className="technologies-grid">
              {experience.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="content-section">
            <h3>
              <GoCheckCircle /> Key Achievements
            </h3>
            <ul className="achievements-list">
              {experience.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>

          {/* Challenges & Solutions */}
          <section className="content-section">
            <h3>
              <FaChartLine /> Challenges & Solutions
            </h3>
            <ul className="challenges-list">
              {experience.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>

          {/* Key Learnings */}
          <section className="content-section">
            <h3>
              <FaLightbulb /> Key Learnings
            </h3>
            <ul className="learnings-list">
              {experience.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
