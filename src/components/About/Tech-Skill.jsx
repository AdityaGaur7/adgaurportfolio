import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import "./SkillsGallery.css";

const frontendSkills = [
  { name: "HTML5", src: "icon/html.png", url: "https://www.w3.org/html/" },
  { name: "CSS3", src: "icon/css.png", url: "https://www.w3schools.com/css/" },
  {
    name: "JavaScript",
    src: "icon/js.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Angular",
    src: "https://angular.io/assets/images/logos/angular/angular.svg",
    url: "https://angular.io",
  },
  { name: "React", src: "icon/react.png", url: "https://reactjs.org/" },
  {
    name: "Figma",
    src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    url: "https://www.figma.com/",
  },
  {
    name: "Bootstrap",
    src: "icon/bootstrap.png",
    url: "https://getbootstrap.com",
  },
  {
    name: "Tailwind",
    src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    url: "https://tailwindcss.com/",
  },
  { name: "Redux", src: "icon/redux.png", url: "https://redux.js.org" },
  {
    name: "TypeScript",
    src: "icon/ts.jpeg",
    url: "https://www.typescriptlang.org/",
  },
];

const backendSkills = [
  { name: "C", src: "icon/c.png", url: "https://www.cprogramming.com/" },
  { name: "C++", src: "icon/c++.png", url: "https://www.w3schools.com/cpp/" },
  { name: "Java", src: "icon/java.png", url: "https://www.java.com" },
  { name: "PHP", src: "icon/php.png", url: "https://www.php.net" },
  { name: "AWS", src: "icon/aws.png", url: "https://aws.amazon.com" },
  { name: "Node.js", src: "icon/node.png", url: "https://nodejs.org" },
  { name: "Express", src: "icon/ex.png", url: "https://expressjs.com" },
  {
    name: "Postman",
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    url: "https://postman.com",
  },
  {
    name: "Next.js",
    src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    url: "https://nextjs.org/",
  },
  {
    name: "Pug",
    src: "https://cdn.worldvectorlogo.com/logos/pug.svg",
    url: "https://pugjs.org",
  },
  { name: "Hbs", src: "icon/hbs.jpeg", url: "https://handlebarsjs.com" },
  { name: "Docker", src: "icon/docker.png", url: "https://www.docker.com/" },
  { name: "Go", src: "icon/go.png", url: "https://golang.org/" },
  { name: "Kafka", src: "icon/kafka.png", url: "https://kafka.apache.org/" },
  { name: "Redis", src: "icon/redis.png", url: "https://redis.io/" },
  {
    name: "Kubernetes",
    src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    url: "https://kubernetes.io",
  },
  {
    name: "Jest",
    src: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
    url: "https://jestjs.io",
  },
  {
    name: "Jira",
    src: "https://www.vectorlogo.zone/logos/jira/jira-icon.svg",
    url: "https://www.atlassian.com/software/jira",
  },
];

const databaseSkills = [
  { name: "MySQL", src: "icon/sql.png", url: "https://www.mysql.com/" },
  {
    name: "PostgreSql",
    src: "icon/postgreSql.png",
    url: "https://www.postgresql.org/",
  },
  { name: "MongoDB", src: "icon/mongodb.png", url: "https://www.mongodb.com/" },
  {
    name: "Firebase",
    src: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    url: "https://firebase.google.com/",
  },
  {
    name: "GCP",
    src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    url: "https://cloud.google.com",
  },
];

const SkillsGallery = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  const renderSkills = (skills) => {
    return skills.map((skill, index) => (
      <div className="skill-item" key={index}>
        <img
          key={index}
          src={skill.src}
          alt={skill.name}
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
    ));
  };

  return (
    <>
      <div className="skills-gallery">
        <h3 className="skills-title">LANGUAGES AND TOOLS:</h3>
        <div className="skills-category">
          <h4>
            <span>FRONTEND</span>
          </h4>
          <div className="skills-container">{renderSkills(frontendSkills)}</div>
        </div>
        <div className="skills-category">
          <h4>BACKEND</h4>
          <div className="skills-container">{renderSkills(backendSkills)}</div>
        </div>
        <div className="skills-category">
          <h4>DATABASE</h4>
          <div className="skills-container">{renderSkills(databaseSkills)}</div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SkillsGallery;
