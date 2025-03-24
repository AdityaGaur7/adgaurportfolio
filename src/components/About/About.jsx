import React from "react";
import Birthday from "./Birthday";
import Education from "./Education";
import Skills from "./Tech-Skill";
import Timeline from "./Experience";
import Certificates from "./Certificates";
import DynamicIconCloud from "./DynamicIconCloud";
function About() {
  return (
    <>
      <div className="about">
        <div className="me" id="about">
          {/* <div className="photo" data-aos="fade-right">
            <img src="images/programmer.webp" alt="ok" />
          </div> */}
          <div className="dynamic-icon-cloud">
            <DynamicIconCloud />
          </div>
          <div className="info " data-aos="fade-left">
            <h1
              style={{
                fontFamily: "monospace",
                textShadow: "black 4px 4px 2px",
              }}
            >
              <span>ABOUT</span> ME
            </h1>
            <p>
              An Engineering Enthusiast driven by curiosity and a passion for
              technology.
              <br />
              I thrive on building and learning scalable applications,
              constantly exploring new technologies to enhance my skill set.
              <br />
              From developing real-time distributed systems to creating dynamic
              web applications, I'm always seeking new challenges to grow and
              innovate.
              <br />
              Let's connect and turn exciting ideas into reality!
            </p>

            <div className="icon">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+917408677090">+91 7408677090</a> <br />
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:adgaur027@gmail.com">adgaur027@gmail.com</a>
            </div>
            <a href="https://wa.me/7408677090" target="_blank">
              {" "}
              <button>WhatsApp me</button>
            </a>
            <Birthday />
          </div>
        </div>
        <div />
      </div>
      <hr />
      <Timeline />

      <Education />

      <Certificates />

      <Skills />
    </>
  );
}

export default About;
