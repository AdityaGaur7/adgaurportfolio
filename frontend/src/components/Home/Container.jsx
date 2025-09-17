import { React, useEffect } from "react";


const Cont = () => {

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
            
            <p className="text-cont">
            Final Year B.Tech | Software Engineer skilled in C++, MERN, Angular, Next.js
            Passionate about <br/> Problem Solving & Scalable Backend Development
            </p>

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
