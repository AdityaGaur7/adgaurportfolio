import React, { Component, useEffect, useState } from "react";

import FlipCountdown from "@rumess/react-flip-countdown";

const Birthday = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [size,setsize]=useState("medium")
    useEffect(()=>{
        if(window.innerWidth<790){
            setWindowWidth(window.innerWidth);
            setsize("extra-small");
          }else{
            setWindowWidth(window.innerWidth);
            setsize("medium");
          }
    },[windowWidth,size])
  return (
    <div className="birthday">
        <h1 style={{textAlign:'center',padding:'10px'}}>
            Wish me after  
        </h1>
      <FlipCountdown
        size={size}
        titlePosition="bottom"
        theme="light"
        //  yearTitle='Year'
        hideYear
        monthTitle="Months"
        dayTitle="Days"
        hourTitle="Hours"
        minuteTitle="Minutes"
        secondTitle="Seconds"
        endAtZero
       
        endAt={"2024-12-20 23:59:59"} // Date/Time
        onTimeUp={() => console.log("Happy Birthday Aditya 🥳🎉🎊")}
      />
    </div>
  );
};

export default Birthday;
