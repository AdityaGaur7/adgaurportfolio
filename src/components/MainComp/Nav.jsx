import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [isvisible, setvisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (windowWidth < 790) {
      setvisible(true);
    } else {
      setvisible(false);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function fun1() {
    setvisible(!isvisible);

    // alert('axa ')
    // console.log(windowWidth);
  }

  function fun2() {}

  const linksStyle = {
    display: isvisible ? "block" : windowWidth < 790 ? "flex" : "flex",
    left: !isvisible ? "0%" : "-100%",
    transition: ".55s ease",
    display: windowWidth < 790 ? "block" : "flex",
  };
  const indexing = {
    zIndex: isvisible ? (windowWidth < 790 ? "0" : "3") : "22",
  };

  return (
    <div>
      <div style={{ position: "fixed", left: "90%", top: "2%", zIndex: "23" }}>
        <IoClose
          style={{
            display: windowWidth > 790 ? "none" : isvisible ? "none" : "flex",
            backgroundColor: "#090909",
            padding: "5px",
            border: "1px solid white",
            borderRadius: "5px",
            color: "white",
            fontSize: "35px",
          }}
          onClick={fun1}
        />
        <HiMenu
          style={{
            display: windowWidth > 790 ? "none" : isvisible ? "flex" : "none",
            backgroundColor: "#090909",
            padding: "5px",
            border: "1px solid white",
            borderRadius: "5px",
            color: "white",
            fontSize: "35px",
          }}
          onClick={fun1}
        />
      </div>
      <div className="nav" style={indexing}>
        <div className="navbar">
          <div className="logo">
            <img src="images/logo2.png" alt="" />
          </div>

          <div
            className="links"
            //  style={isvisible ?{display:'flex'}:{display:'none'} } >
            style={linksStyle}
          >
            <li>
              <NavLink to="/" onClick={windowWidth < 790 ? fun1 : fun2}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" onClick={windowWidth < 790 ? fun1 : fun2}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={windowWidth < 790 ? fun1 : fun2}>
                Profiles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="https://drive.google.com/drive/folders/1eRyFBaDK-_hK39pe2BVZYCIDAM6jto8g?lfhs=2"
                onClick={windowWidth < 790 ? fun1 : fun2}
              >
                Resume
              </NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
