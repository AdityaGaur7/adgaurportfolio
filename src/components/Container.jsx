import {React,useEffect} from 'react'
import autotyper from 'autotyper';
import gsap from 'gsap';


const Cont = () => {
    const example = Object.create(autotyper);
    const element = document.querySelector('#element');
    const options = {
      text:'WEB DEVELOPER LOVE SKETCHING '
    };
     
    example.init(element, options);

    useEffect(() => {
        const moveElement = () => {
          const scrollPosition = window.scrollY;
          
          gsap.to('#img', { x: -scrollPosition,y:-scrollPosition, ease: 'none' });
      
        };
    
        window.addEventListener('scroll', moveElement);
    
        return () => {
          window.removeEventListener('scroll', moveElement);
        };
      }, []);
      
  return (
    
<>
        <div className="container">
           <div className="box">
            <div className="left" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">

                <h3>Hi ,it's Me</h3>
                <h1>I'm <span>ADITYA GAUR</span></h1>
                <span id="element"></span>
                <p>
                    SOPHOREMORE BTECH STUDENT || SKILLED AT C++, HTML, CSS, JS, REACT JS, NEXT JS<br/>AND LEARNING BACKEND WITH NODEJS IN <span>MERN STACK </span>
                     <br/> LEARNING TO IMPROVE NOT TO
                    PROVE || LONG WAY TO GO 
                </p>
              

                <div className="handle glow">
                    <li><a href="https://github.com/AdityaGaur7"><i className="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.instagram.com/__aditya_gaur_090/"><i
                                className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/aditya-gaur-mmmut/"><i
                                className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCuThDiAO3aXPStVmssLssKQ"><i
                                className="fa-brands fa-youtube"></i></a></li>
                    <li><a href="https://twitter.com/Aditya7112027"><i className="fa-brands fa-twitter"></i></a></li>
                </div>
                <div className="card" id="resume" >
                    <div className="cd">
                        <button><i className="fa-solid fa-arrow-up-right"><a
                                    href="https://drive.google.com/drive/folders/1eRyFBaDK-_hK39pe2BVZYCIDAM6jto8g?lfhs=2" target="_blank">RESUME</a></i></button>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="frame">
                
                 
                    <img src="images/adgaur.jpg"  alt="" id="img"/>
                    

                </div>
             

            </div>
            <div/>
        </div>
        </div>
     <hr />
        </>
 
  
  )
}

export default Cont