import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./animate.css"
const Animate = () => {
  useEffect(() => {
    const moveElement = () => {
      const scrollPosition = window.scrollY;
      
      gsap.to('.astro1', { x: scrollPosition, ease: 'none' });
      gsap.to('.astro2', { x: -scrollPosition, ease: 'none' });
      gsap.to('.wlcm', { x: -scrollPosition, ease: 'none' });
      gsap.to('.astrospace', { x: scrollPosition, ease: 'none' });
      gsap.to('.to', { y: scrollPosition, ease: 'none' });
      gsap.to('.rocket', { y: -scrollPosition, x: -scrollPosition, ease: 'none' });

  gsap.to('.asteroid', { x:scrollPosition, y: scrollPosition, ease: 'none' });
  gsap.to('.satellite', { x:scrollPosition, y: -scrollPosition, ease: 'none' });
  gsap.to('.astro1', { y: Math.sin(scrollPosition * 0.1) * 25, ease: 'none' });
  gsap.to('.astro2', { y: Math.cos(scrollPosition * 0.1) * 25, ease: 'none' });
    };

    window.addEventListener('scroll', moveElement);

    return () => {
      window.removeEventListener('scroll', moveElement);
    };
  }, []);

  return (
    <div className='conti'>
    
   
      <img className="astro1" src="images/astro2.png" alt="" style={{ position: 'fixed',zIndex:'1' }} />
      <img className="astro2" src="images/astro1.png" alt="" style={{ position: 'fixed',zIndex:'7' }} />
      <img className="asteroid" src="images/asteroid.png" alt="" style={{ position: 'fixed' ,zIndex:'6'}} />
      <img className="satellite" src="images/satellite.png" alt="" style={{ position: 'fixed' ,zIndex:'8'}} />
      <img className="rocket" src="images/rocket1.webp" alt="" style={{ position: 'fixed' ,zIndex:'0'}} />
      <div className='midtext'>
        <div className='txt'>
        <h1 className='wlcm'>WELCOME </h1>
            <h1 className='to'> TO MY</h1> <h1 className='astrospace'>PORTFOLIO</h1>
            </div>
    </div>
    </div>
  );
};

export default Animate;
