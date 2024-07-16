import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './SkillsGallery.css';

const frontendSkills = [
  { name: 'Angular', src: 'https://angular.io/assets/images/logos/angular/angular.svg', url: 'https://angular.io' },
  { name: 'Bootstrap', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg', url: 'https://getbootstrap.com' },
  { name: 'CSS3', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg', url: 'https://www.w3schools.com/css/' },
  { name: 'Figma', src: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg', url: 'https://www.figma.com/' },
  { name: 'HTML5', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', url: 'https://www.w3.org/html/' },
  { name: 'JavaScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg', url: 'https://reactjs.org/' },
  { name: 'Redux', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg', url: 'https://redux.js.org' },
  { name: 'Tailwind', src: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', url: 'https://tailwindcss.com/' },
  { name: 'TypeScript', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
];

const backendSkills = [
  { name: 'AWS', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', url: 'https://aws.amazon.com' },
  { name: 'C', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', url: 'https://www.cprogramming.com/' },
  { name: 'C++', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', url: 'https://www.w3schools.com/cpp/' },
  { name: 'Docker', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg', url: 'https://www.docker.com/' },
  { name: 'Express', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg', url: 'https://expressjs.com' },
  { name: 'Java', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', url: 'https://www.java.com' },
  { name: 'Jest', src: 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg', url: 'https://jestjs.io' },
  { name: 'Kubernetes', src: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg', url: 'https://kubernetes.io' },
  { name: 'Next.js', src: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg', url: 'https://nextjs.org/' },
  { name: 'Node.js', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', url: 'https://nodejs.org' },
  { name: 'PHP', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg', url: 'https://www.php.net' },
  { name: 'Postman', src: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', url: 'https://postman.com' },
  { name: 'Pug', src: 'https://cdn.worldvectorlogo.com/logos/pug.svg', url: 'https://pugjs.org' },
];

const databaseSkills = [
  { name: 'Firebase', src: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg', url: 'https://firebase.google.com/' },
  { name: 'GCP', src: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg', url: 'https://cloud.google.com' },
  { name: 'MongoDB', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg', url: 'https://www.mongodb.com/' },
  { name: 'MySQL', src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg', url: 'https://www.mysql.com/' },
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
      <div className="skill-item">

        <img key={index} src={skill.src} alt={skill.name} />
      </div>
    
    ));
  };

  return (
    <>
    <div className="skills-gallery">
      <h3 className="skills-title">Languages and Tools:</h3>
      <div className="skills-category">
        <h4><span>Frontend</span></h4>
        <div className="skills-container">{renderSkills(frontendSkills)}</div>
      </div>
      <div className="skills-category">
        <h4>Backend</h4>
        <div className="skills-container">{renderSkills(backendSkills)}</div>
      </div>
      <div className="skills-category">
        <h4>Database</h4>
        <div className="skills-container">{renderSkills(databaseSkills)}</div>
      </div>
     
    </div>
    <hr/>
    </>
  );
};

export default SkillsGallery;
