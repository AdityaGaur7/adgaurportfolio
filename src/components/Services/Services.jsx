import React from "react";
import CodingProfile from "./CodingProfile";
function Services() {
  return (
    <div className="servicesection">
      <div class="msg ">
        <h1 id="cnt ">
          {" "}
          <span>SERV</span>ICES
        </h1>
      </div>
      <div className="services">
        <div className="service">
          <div className="bx" data-aos="flip-up">
            <span>
              <i class="fa-solid fa-laptop-code"></i>
            </span>
            <h2>SOFTWARE DEVELOPER</h2>
            <p>
              Expert in full-stack development with proficiency in modern
              frameworks, databases, and cloud technologies to build scalable
              applications
            </p>
          </div>
          <div className="bx" data-aos="flip-up">
            <span>
              {" "}
              <i className="fa-solid fa-bug"></i>
            </span>
            <h2>SOFTWARE TESTING</h2>
            <p>
              Skilled in manual and automated testing methodologies, ensuring
              high-quality software delivery through comprehensive testing
              strategies
            </p>
          </div>
          <div className="bx" data-aos="flip-up">
            <span>
              <i className="fa-solid fa-tasks"></i>
            </span>
            <h2>PROJECT MANAGEMENT</h2>
            <p>
              Experienced in Agile methodologies, team coordination, and project
              planning to deliver projects on time and within scope
            </p>
          </div>
        </div>
      </div>
      <hr />
      <CodingProfile />
    </div>
  );
}

export default Services;
