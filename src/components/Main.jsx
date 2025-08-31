import React, { useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Nav from "./MainComp/Nav";
import Footer from "./MainComp/Footer";
import Back from "./Home/Backg";

import Services from "./Services/Services";
import Projects from "./project/Projects";
import ProjectDetail from "./project/ProjectDetail";
import About from "./About/About";
import ExperienceDetail from "./About/ExperienceDetail";
import Aos from "aos";
import "aos/dist/aos.css";

import Home from "./Home/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Create a new ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Router>
      <div>
        <ScrollToTop />
        <div className="App">
          <AnimatedCursor
            hasBlendMode={true}
            innerStyle={{
              backgroundColor: "#333",
            }}
            color="#fff"
            innerSize={10}
            outerSize={70}
            innerScale={2}
            outerScale={2}
            outerAlpha={1}
            trailingSpeed={15} //8
            outerStyle={{
              // border: '3px solid #fff',
              backgroundColor: "white",
              mixBlendMode: "exclusion",
            }}
          />

          <div className="background">
            <Back />
          </div>
        </div>
        <Nav />
        <Back />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route
            path="/experience/:experienceId"
            element={<ExperienceDetail />}
          />
          <Route path="/profile" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Main;
