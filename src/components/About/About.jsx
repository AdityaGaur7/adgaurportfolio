import React from "react";
import Birthday from "./Birthday";
import Experience from "./Experience.jsx";
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
              Engineering Enthusiast passionate about scalable systems,
              distributed computing, and web applications.<br/> Driven by curiosity
              to learn, build, and innovate through technology.
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
      <Experience />
      <hr />
      <Certificates />
      <hr />
     
    </>
  );
}

export default About;
