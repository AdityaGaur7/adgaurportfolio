import React from "react";

const TeamCard = ({ member }) => {
  return (
    <div
      className="col-lg-3 col-md-6 p-5"
      
     
    >
      <div className="team-1">
        <div className="pic">
          <img src={member.profileImage} className="img-fluid" alt="Profile" />
        </div>
        <div className="team-info">
          <h4>{member.name}</h4>
          <span>{member.placement}</span>
          <div className="social">
            <a href={`mailto:${member.email}`}>
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href={member.instagram}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href={member.linkedin}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
