import React, { useEffect } from "react";
import projectsData from "./ProjectData";

import VanillaTilt from "vanilla-tilt";
function Projects() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".cd"), {
      //     max: 15,
      // speed: 20,
      glare: true,
      "max-glare": "0.50",
      reverse: false, // reverse the tilt direction
      max: 15, // max tilt rotation (degrees)
      startX: 0, // the starting tilt on the X axis, in degrees.
      startY: 0, // the starting tilt on the Y axis, in degrees.
      perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
      scale: 1, // 2 = 200%, 1.5 = 150%, etc..
      speed: 300, // Speed of the enter/exit transition
      transition: true, // Set a transition on enter/exit.
      axis: null, // What axis should be enabled. Can be "x" or "y".
      reset: true, // If the tilt effect has to be reset on exit.
      "reset-to-start": true, // Whether the exit reset will go to [0,0] (default) or [startX, startY]
      easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
      glare: false, // if it should have a "glare" effect
      "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
      "glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise
      // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
      "mouse-event-element": null, // css-selector or link to an HTML-element that will be listening to mouse events
      "full-page-listening": false, // If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
      gyroscope: true, // Boolean to enable/disable device orientation detection,
      gyroscopeMinAngleX: -45, // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
      gyroscopeMaxAngleX: 45, // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
      gyroscopeMinAngleY: -45, // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
      gyroscopeMaxAngleY: 45, // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
      gyroscopeSamples: 10,
    });
  });
  return (
    <div>
      <div className="projects" id="projectsid">
        <div className="proj">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="card"
              data-aos="flip-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="cd">
                <img src={project.image} alt={project.title} />
                <br />
                <button>
                  <i className="fa-solid fa-arrow-up-right">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      OPEN
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  </i>
                </button>
              </div>
              <div className="layer">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Projects;
