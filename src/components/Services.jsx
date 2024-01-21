import React from 'react'

function Services() {
  return (
    <div>
         <div class="msg">
        <h1 id="cnt"> <span>Serv</span>ices</h1>
    </div>
       <div className="services">
        <div className="service">
            <div className="bx" data-aos="flip-up">
                <span> <i className="fa-solid fa-code"></i></span>
                <h2>Web Development</h2>
                <p>Have Good Grasp over Development using HTML , CSS & JAVASCRIPT </p>
            </div>
            <div className="bx" data-aos="flip-up">
                <span> <i className="fa-solid fa-crop-simple"></i></span>
                <h2>UI/UX</h2>
                <p>Create a Positive and Attractive User Interface, User Friendly Experience</p>
            </div>
            <div className="bx" data-aos="flip-up">
                <span> <i className="fa-solid fa-video"></i></span>
                <h2>Video Editing</h2>
                <p>Have Good Grasp over Video Editing on Android using Kinemaster and Capcut</p>
            </div>
        </div>

    </div>
    <hr />
    </div>
  )
}

export default Services
