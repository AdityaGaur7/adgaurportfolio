import React, { useEffect, useRef } from "react";
import { DiAndroid, DiCodeigniter } from "react-icons/di";
import "./Timeline.css";

const events = [
  {
    icon: <DiAndroid className="img" />,
    title: "FULL STACK DEVELOPER INTERN (IVEGTECH)",
    date: "AUG 2024 - PRESENT",
    description:
      `🛒 Developed an eCommerce application using AngularJS and Bootstrap for the frontend, and Java with Spring Boot , PostgreSQL for the backend.`,
    position: "left",
  },
  {
    icon: <DiCodeigniter className="img" />,
    title: "MEAN STACK DEVELOPER INTERN (PUSHPAK VIMAN PVT. LTD.)",
    date: "JUN 2024 - AUG 2024",
    description:
      "Made a MERN project ecommerce website for selling electronics components and 3d models online",
    position: "right",
  },
 
  {
    icon: <DiCodeigniter className="img" />,
    title: "REACTJS DEVELOPER (MMMUT FOUNDATn)",
    date: "APR 2024 - JUN 2024",
    description:
      "Worked on React.js and built a complete website. This included development and implementation of various functionalities.",
    position: "left",
  },
  {
    icon: <DiCodeigniter className="img" />,
    title: "MERN STACK DEVELOPER (CODERS AND DEVELOPERS CLUB)",
    date: "JAN 2024 - APR 2024",
    description:
      "This website provides information about CDC events, allows users to resolve coding queries, verify certificates, and learn more about the team.",
    position: "right",
  },
];

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const timelineItems = timelineRef.current.querySelectorAll(".roadmap_main");

    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="experience">
        <h3 className="experience-title">EXPERIENCE & WORKS:</h3>

    <div ref={timelineRef} className="timeline">
      {events.map((event, index) => (
        <div
        key={index}
        className={`roadmap_main ${
            event.position === "left" ? "left-roadmap" : "right-roadmap"
        }`}
        >
          {event.icon}
          <div className="text-box">
            <h3>{event.title}</h3>
            <small>{event.date}</small>
            <p>{event.description}</p>
            <span
              className={`${
                  event.position === "left"
                  ? "left-roadmap-arrow"
                  : "right-roadmap-arrow"
                }`}
                ></span>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Timeline;
