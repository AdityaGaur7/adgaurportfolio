import React from "react";
import { useNavigate } from "react-router-dom";
import { GoCheckCircle } from "react-icons/go";
import "../../styles/Experience.css";
import experienceData from "../data/Experience.json";

const events = experienceData;

const Experience = () => {
  console.log(events);
  const navigate = useNavigate();

  return (
    <div className="experience">
      <h3 className="experience-title skills-title">Experience & Works</h3>
      <div className="experience-grid">
        {events.map((event, index) => (
          <div
            key={index}
            className="experience-card"
            onClick={() => navigate(`/experience/${event.id}`)}
          >
            <div className="card-header">
             
              <div className="card-title">
                <h3>{event.title}</h3>
                <h4>{event.company}</h4>
                <span className="date">{event.date}</span>
              </div>
            </div>
           
            <div className="card-footer">
              <span className="view-details">Click to view details →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
