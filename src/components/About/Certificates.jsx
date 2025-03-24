import React from "react";
import "./About.css";

function Certificates() {
  const certificates = [
    {
      "title": "Software Developer Intern",
      "issuer": "IVEGTech",
      "date": "Aug 2024 - Dec 2024",
      "image": "images/certificates/ivegtech.png",
      "link": "https://drive.google.com/file/d/1cfmCj-m_wyrpxeMuBcpgmduKXmmDC6AZ/view",
      "skills": [
          "AngularJS",
          "Bootstrap",
          "Java",
          "Spring Boot",
          "SQL",
          "JWT Authentication",
          "Product Management",
          "User Authentication System",
          "Admin Controls",
          "High-performance Optimization"
      ]
  },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Nov 2024",
      image: "images/certificates/postman.png",
      link: "https://badgr.com/public/assertions/NMiMT1poRzabNuZrXxA5Eg?identity__email=adgaur027@gmail.com&action=download",
      skills: [
        "APIs in modern software development",
        "Making API requests",
        "Query parameters",
        "Basic scripting",
        "API Key Authorization",
      ],
    },
    {
      title: "Google Cloud Study Jams",
      issuer: "Google Developer Groups on Campus, MMMUT (GDG-MMMUT)",
      date: "Jul 2023",
      image: "images/certificates/googlecloudstudyjam.png",
      link: "https://drive.google.com/file/d/18viP4fBFVEtNerd6woUd86qp38YpYFKE/view",
      skills: ["Cloud Computing", "Google Cloud", "Cloud Computing"],
    },

    {
      title: "SSOC Season 2",
      issuer: "Let's Get Social",
      date: "Apr 2023",
      image: "images/certificates/ssoc.png",
      link: "https://certificate.givemycertificate.com/c/8649e1ed-e3a8-4d89-ab34-5dd613b5f276",
      skills: ["Leadership", "Teamwork", "Communication","Open Source"],
    },
    {
      title: "Solution Challenge 2023",
      issuer: "Solve for India",
      date: "Jul 2023",
      image: "images/certificates/solutionchallenge.png",
      link: "https://drive.google.com/file/d/1Yu-M7vAAa4nRkud-0uh5eHKtjWxufbmH/view?usp=sharing",
      skills: ["Leadership","Open Source","Problem Solving"],
    },
    {
      title: "MCQ Coding Assessment - Unstop Talent Park",
      issuer: "Unstop",
      date: "Apr 2024",
      image: "images/certificates/unstop1.png",
      link: "https://unstop.com/certificate-preview/dc112b5b-ed14-49f6-a87c-fda51949eac2?utm_campaign=",
      skills: ["DSA", "Problem Solving","Coding"],
    },
    {
      title: "Level 1.1: E-Commerce",
      issuer: "Unstop",
      date: "Aug 2023",
      image: "images/certificates/unstopflipkart.png",
      link: "https://unstop.com/certificate-preview/c286a995-9a6d-4475-9dde-ec264252af11?utm_campaign=site-emails",
      skills: ["C", "C++","Coding","Problem Solving","DSA"],
    },
    {
      title: "Web Quest",
      issuer: "Unstop",
      date: "May 2023",
      image: "images/certificates/unstop2.png",
      link: "https://d8it4huxumps7.cloudfront.net/lambda-pdfs/story-images/d198e663-496c-48fe-b3bb-d8def79a3051.jpg",
      skills: ["Front-End Development", "Web Development","Coding"],
    },
  ];

  return (
    <div className="certificates-section" id="certificates">
      <h1 className="section-title skills-title" data-aos="fade-up">
        Certificates
      </h1>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            {cert.image && <img src={cert.image} alt={cert.title} />}
            <div className="certificate-info">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              {cert.date && <p className="date">{cert.date}</p>}

              {cert.skills && (
                <div className="skills">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
