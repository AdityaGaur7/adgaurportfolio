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
              <i class="fa-solid fa-code-compare"></i>
            </span>
            <h2>WEB DEV</h2>
            <p>
              Has deep understanding of Frontend as well as Backend Frameworks
              with Github and AWS
            </p>
          </div>
          <div className="bx" data-aos="flip-up">
            <span>
              {" "}
              <i className="fa-solid fa-crop-simple"></i>
            </span>
            <h2>UI/UX</h2>
            <p>
              Can create a Positive and Attractive User Interface, User Friendly
              Experience
            </p>
          </div>
          <div className="bx" data-aos="flip-up">
            <span>
              <i className="fa-solid fa-code "></i>
            </span>
            <h2>PROBLEM SOLVER</h2>
            <p>
              Have Good Grasp over data Structure & Algorithm and has solved
              over 400+ problems
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
