import React, { useEffect } from 'react'

import NET from "vanta/src/vanta.net"
function BACK() {
 useEffect(()=>{
  NET({
    el:"#ok",
    mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: "#f9f8f8",
  backgroundColor: "#1d252f",
  points: 8.00,
  maxDistance: 11.00,
  spacing: 19.00
  })
 },[])


 
  return (
   
    <div>
       <div id="ok">
        
        </div>
    </div>
  )
}

export default BACK
