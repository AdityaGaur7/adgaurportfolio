import React, { useEffect } from 'react'

import GLOBE from "vanta/src/vanta.globe"
function BACK() {
 useEffect(()=>{
  GLOBE({
    el:"#ok",
    mouseControls: true,
touchControls: true,
gyroControls: false,
minHeight: 200.00,
minWidth: 200.00,
scale: 1.00,
scaleMobile: 1.00,
color: "#00E8F8",
color1:"red",
color2: "#ffff",
size: 0.6,
backgroundColor: "#1d252f"
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
