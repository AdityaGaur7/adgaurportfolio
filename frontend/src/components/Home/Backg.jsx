import React, { useEffect } from "react";

import NET from "vanta/src/vanta.net";
function BACK() {
  useEffect(() => {
    NET({
      el: "#ok",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: "#f9f8f8",
      backgroundColor: "#0c0c0e",
      points: 8.0,
      maxDistance: 11.0,
      spacing: 19.0,
    });
  }, []);

  return (
    <div>
      <div id="ok"></div>
    </div>
  );
}

export default BACK;
