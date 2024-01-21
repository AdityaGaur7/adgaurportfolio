import React from 'react'

const Nav = () => {
    
  return (
    <div>
      
        <div className="nav">
          <div className="navbar">
            <div className="logo">
                <img src="images/logo2.png" alt=""/>
            </div>
            <div className="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projectsid">Projects</a></li>
                <li><a href="#skill">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </div>
            <i className="fa-solid fa-x" id="btn-x"></i>
            <i className="fa-solid fa-bars" id="btn-hbg"></i>


          </div>
        </div>

    </div>
  )
}

export default Nav