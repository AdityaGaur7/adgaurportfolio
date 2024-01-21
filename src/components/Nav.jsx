import React, { useState } from 'react'

const Nav = () => {
    const[isvisible,setvisible]= useState(false);

  

    function fun1(){
      setvisible(!isvisible);
    }
   

    const linksStyle = {
        display: isvisible ? 'flex' : 'none',
        
      };


    return (
    <div>
      
        <div className="nav">
          <div className="navbar">
            <div className="logo">
                <img src="images/logo2.png" alt=""/>
            </div>
            
            <div className="links" style={isvisible?{display:'block'}:{display:'none'}}>
                <li><a href="index.html">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projectsid">Projects</a></li>
                <li><a href="#skill">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </div>
            <i className="fa-solid fa-x" id="btn-x"
             style={linksStyle} 
              onClick={fun1}></i>
            <i className="fa-solid fa-bars" 
            style={isvisible?{display:'none'}:{display:'flex'}}
            id="btn-hbg" onClick={fun1}></i>


          </div>
        </div>

    </div>
  )
}

export default Nav