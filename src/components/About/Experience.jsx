import React, { useEffect, useRef } from "react";
import { DiAndroid, DiCodeigniter } from "react-icons/di";
import "./Timeline.css";

const events = [
  {
    icon: <DiAndroid className="img" />,
    title: "FULL STACK DEVELOPER INTERN",
    company: "IVEGTECH",
    date: "AUG 2024 - PRESENT",
    description: [
      "🛒 Developed an eCommerce application using AngularJS and Bootstrap",
      "🔧 Implemented backend using Java Spring Boot and PostgreSQL",
      "📱 Created responsive UI components and RESTful APIs",
    ],
    position: "left",
  },
  {
    icon: <DiCodeigniter className="img" />,
    title: "MEAN STACK DEVELOPER INTERN",
    company: "PUSHPAK VIMAN PVT. LTD.",
    date: "JUN 2024 - AUG 2024",
    description: [
      "🚀 Built a MERN e-commerce platform for electronics components",
      "💻 Implemented secure payment gateway and user authentication",
      "📊 Developed admin dashboard for inventory management",
    ],
    position: "right",
  },
  {
    icon: <DiCodeigniter className="img" />,
    title: "REACTJS DEVELOPER",
    company: "MMMUT FOUNDATION",
    date: "APR 2024 - JUN 2024",
    description: [
      "⚛️ Developed complete website using React.js",
      "🎨 Implemented modern UI/UX design principles",
      "🔄 Created reusable component library",
    ],
    position: "left",
  },
  {
    icon: <DiCodeigniter className="img" />,
    title: "MERN STACK DEVELOPER",
    company: "CODERS AND DEVELOPERS CLUB",
    date: "JAN 2024 - APR 2024",
    description: [
      "🌐 Built club website with event management system",
      "🎓 Implemented certificate verification system",
      "💬 Created coding query resolution platform",
    ],
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
      <h3 className="experience-title">Experience & Works</h3>
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
              <small>{event.company}</small>
              <small>{event.date}</small>
              {event.description.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
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
