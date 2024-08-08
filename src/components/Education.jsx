import React from 'react'

function Education() {
  return ( 
   <>
       <div className="education" >
         <div className="study" id="skill" data-aos="fade-right">
            <div className="edu">
                <div className="msg">
                    <h1> <span>Edu</span>cation</h1>
                </div><br/>

                <h2>Btech Computer Science & Engineering (Current)</h2>
                <p>MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY ,GORAKHPUR (2022-2026)</p>
            </div>
            <div className="edu">
                <h2>Intermediate School</h2>
                <p>P.D.ACADEMY SR. SEC. SCHOOL ,DEORIA (PASSING YEAR-2021)</p>
                <p><span>PERCENTAGE</span> - 94.6%</p>
            </div>
            <div className="edu">
                <h2>High School</h2>
                <p>P.D.ACADEMY SR. SEC. SCHOOL ,DEORIA (PASSING YEAR-2019)</p>
                <p><span>PERCENTAGE</span> - 95.4%</p>
            </div>
         </div>
         <div className="tech" data-aos="fade-left">
            <div className="msg" id="msg">
                <h1> <span>Achi</span>evement</h1>
            </div>
         <ul>
            <li>Open Source Contributor in HacktoberFest'23</li>
            <li>Campus Ambassdor at GFG</li>
            <li>Developed a MERN application for CDC club</li>
            <li>FrontEnd Developer at MMMUT Foundation</li>
            <li>Solved over total of 700 problems on different coding platforms</li>
        </ul>

         </div>
       </div>
     <hr />
      </>
  )
}

export default Education
