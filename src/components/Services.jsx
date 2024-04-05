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
                <span><i class="fa-solid fa-code-compare"></i></span>
                <h2>Web Development</h2>
                <p>Has deep understanding of Frontend as well as Backend Frameworks with Github and AWS</p>
            </div>
            <div className="bx" data-aos="flip-up">
                <span> <i className="fa-solid fa-crop-simple"></i></span>
                <h2>UI/UX</h2>
                <p>Can create a Positive and Attractive User Interface, User Friendly Experience</p>
            </div>
            <div className="bx" data-aos="flip-up">
                <span><i className="fa-solid fa-code "></i></span>
                <h2>Problem Solver</h2>
                <p>Have Good Grasp over data Structure & Algorithm and has solved over 400+ problems</p>
            </div>
        </div>

    </div>
    <hr />
    </div>
  )
}

export default Services
