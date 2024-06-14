import React, { useState, useEffect } from 'react'

const Nav = () => {
    const[isvisible,setvisible]= useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
  
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
   
    useEffect(() => {
      if(windowWidth<790){
        setvisible(true);
      }else{
        setvisible(false);
      }
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    function fun1(){
      setvisible(!isvisible);
      
      // alert('axa ')
      // console.log(windowWidth);
    }
 
    function fun2(){

    }
          
      
    
    const linksStyle = {
        
    display: (isvisible) ? 'block' : (windowWidth < 790 ) ? 'flex' : 'flex',
     left:(!isvisible) ? '0%' : '-100%',
     transition:'.55s ease',
     display:(windowWidth < 790 ) ?'block':'flex',
     
      };
      const indexing  ={
        zIndex:(isvisible)?'22':'22',
        
      }

    return (
    <div>
      <div style={{position:'fixed',left:'90%',top:'2%',zIndex:'23'}}>

      
        <i className="fa-solid fa-x" id="btn-x"
// display: (isvisible) ? 'none' : (windowWidth <= 790 ) ? 'block' : 'flex',  
             style={
              {display:(windowWidth > 790)
              ?'none': (isvisible)?'none':'flex',backgroundColor: "#575c63",
                padding:'5px',
              color: "white",
            
              fontSize: "20px" }
             }
          
              onClick={fun1}></i>
            <i className="fa-solid fa-bars" 
               style={
                {display:(windowWidth > 790)
                ?'none': (isvisible)?'flex':'none',backgroundColor: "#575c63",
                padding:'5px',
                color: "white",
               
                fontSize: "20px"}
               }
            id="btn-hbg" onClick={fun1}></i>
      </div>
        <div className="nav"   style={indexing }   >
          <div className="navbar">
            <div className="logo">
                <img src="images/logo2.png" alt=""/>
            </div>
            
            <div className="links"
            //  style={isvisible ?{display:'flex'}:{display:'none'} } >
             style={linksStyle} 
             >
                <li><a href="#" onClick={ (windowWidth < 790 )? fun1:fun2}>Home</a></li>
                <li><a href="#about" onClick={ (windowWidth < 790 ) ? fun1:fun2}>About</a></li>
                <li><a href="#projectsid" onClick={ (windowWidth < 790 ) ? fun1:fun2}>Projects</a></li>
                <li><a href="#skill" onClick={ (windowWidth < 790 ) ? fun1:fun2}>Services</a></li>
                <li><a href="#contact" onClick={ (windowWidth < 790 ) ? fun1:fun2}>Contact</a></li>
            </div>
           
                

         
            


          </div>
        </div>

    </div>
  )
}

export default Nav