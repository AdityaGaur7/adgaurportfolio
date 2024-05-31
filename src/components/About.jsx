import React from 'react'

function About() {
  return (
<>
      <div className="about">
        <div className="me" id="about">
            <div className="photo" data-aos="fade-right">
                <img src="images/programmer.webp" alt="image"/>
            </div>
            <div className="info" data-aos="fade-left">
                <h1>About <span>Me</span></h1>
                <p>An Engineering Enthusiastic Learning to quench the curiosity<br/>and Exploring different Stuffs of
                    Tech . I enjoy
                    building, learning Websites and I'm always looking <br/>for new challenges and opportunities to
                    grow my skills.
                    Let's connect and create something great together!</p>
                <div className="icon">
                    <i className="fa-solid fa-phone"></i><a href="tel:+917408677090">+91 7408677090</a> <br/>
                    <i className="fa-solid fa-envelope"></i><a href="mailto:adgaur027@gmail.com">adgaur027@gmail.com</a>
                </div>
                <a href="#contact"> <button>Lets talk</button></a>
            </div>
        </div>
     <div/>
   </div>
   <hr />
   </>
  )
}

export default About
