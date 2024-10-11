import React from 'react'
import Birthday from './Birthday'
import Education from './Education'
import Skills from "./Tech-Skill";
import Timeline from './Experience';
function About() {
  return (
<>

      <div className="about">
        <div className="me" id="about">
            <div className="photo" data-aos="fade-right">
                <img src="images/programmer.webp" alt="ok"/>
            </div>
            <div className="info " data-aos="fade-left">
                <h1 style={{ fontFamily:'monospace',textShadow:'black 4px 4px 2px'}}><span>ABOUT </span>ME</h1>
                <p>An Engineering Enthusiastic Learning to quench the curiosity<br/>and Exploring different Stuffs of
                    Tech . I enjoy
                    building, learning Websites and I'm always looking <br/>for new challenges and opportunities to
                    grow my skills.
                    Let's connect and create something great together!</p>
                <div className="icon">
                    <i className="fa-solid fa-phone"></i><a href="tel:+917408677090">+91 7408677090</a> <br/>
                    <i className="fa-solid fa-envelope"></i><a href="mailto:adgaur027@gmail.com">adgaur027@gmail.com</a>
                </div>
                <a href="https://wa.me/7408677090" target="_blank"> <button>WhatsApp me</button></a>
                <Birthday/>
            </div>
        </div>
     <div/>
   </div>
   <hr />
   <Timeline/>
        
   <Education />
   
   <Skills/>

   
   </>
  )
}

export default About
