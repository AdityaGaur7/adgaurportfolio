import React from "react";
import AnimatedCursor from "react-animated-cursor"
import Nav from './Nav'
import Footer from './Footer'
import Back from './Backg'
import Education from './Education'
import About from './About'
import Cont from './Container'
import Services from './Services'
import Contact from './Contact'
import Projects from './Projects'
function Main() {
  return (
    <div>
<div className="App">
<AnimatedCursor
      
  
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "#333"
      }}
      color="#fff"
      innerSize={10}
      outerSize={100}
      innerScale={2}
      outerScale={2}
      outerAlpha={1}
      outerStyle={{
        // border: '3px solid #fff',
        backgroundColor: "#fff",
        mixBlendMode: 'exclusion'
      }}
    
          
          />
    </div>
      <Nav/>
      <Back/>
      <Cont/>
      <About/>
      <Education/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Main
