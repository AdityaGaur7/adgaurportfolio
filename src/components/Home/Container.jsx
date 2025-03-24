import { React, useEffect } from "react";
import autotyper from "autotyper";

const Cont = () => {
  const example = Object.create(autotyper);
  const element = document.querySelector("#element");
  const options = {
    text: "WEB DEVELOPER LOVE SKETCHING ",
  };

  example.init(element, options);

  // useEffect(() => {
  //     const moveElement = () => {
  //       const scrollPosition = window.scrollY;

  //       gsap.to('#img', { x: -scrollPosition,y:-scrollPosition, ease: 'none' });

  //     };

  //     window.addEventListener('scroll', moveElement);

  //     return () => {
  //       window.removeEventListener('scroll', moveElement);
  //     };
  //   }, []);

  return (
    <>
      <div className="container">
        <div className="box">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h3>Hi, it's Me</h3>
            <h1>
              I'm{" "}
              <span
                style={{
                  fontFamily: "monospace",
                  textShadow: "black 4px 4px 2px",
                  fontSize: "40px",
                }}
              >
                ADITYA GAUR
              </span>
            </h1>
            <span id="element"></span>
            <p className="text-cont">
              PRE-FINAL YEAR B.TECH STUDENT | Skilled in C++, MERN, AngularJS,
              Next.js <br />
              Passionate about <strong>Competitive Programming</strong> &{" "}
              <strong>Backend Development</strong> with RESTful APIs. <br />
              Built <strong>Scalable Systems</strong> using{" "}
              <strong>Socket.IO, Redis, Kafka, PostgreSQL, Spring Boot</strong>,
              and <strong>JWT Authentication</strong>. <br />
              Learning to Improve, Not Just to Prove | Will Make Mom{" "}
              <strong>PROUD</strong> 💖
            </p>

            <div className="handle glow">
              <li>
                <a href="https://github.com/AdityaGaur7">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/__aditya_gaur_090/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aditya-gaur-mmmut/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCuThDiAO3aXPStVmssLssKQ">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Aditya7112027">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </div>
            <div className="card" id="resume">
              <div className="cdc" id="resumesection">
                <button className="resumebutton">
                  <i className="fa-solid fa-arrow-up-right">
                    <a
                      href="https://drive.google.com/drive/folders/1eRyFBaDK-_hK39pe2BVZYCIDAM6jto8g?lfhs=2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      RESUME
                    </a>
                  </i>
                </button>
              </div>
            </div>
          </div>

          <div className="right">
            <div
              className="frame"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img src="images/adgaur.jpg" alt="" id="img" />
            </div>
          </div>
          <div />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Cont;
