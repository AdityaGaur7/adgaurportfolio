import React from 'react'

function Education() {
  return ( 
   <>
       <div className="education" >
         <div className="study" id="skill" data-aos="fade-right">
            <div className="edu">
                <div className="msg">
                    <h1> <span>EDU</span>CATION</h1>
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
                <h1> <span>ACHIE</span>VEMENT</h1>
            </div>
         <ul className='acheivement'>
            <li>FULL STACK DEVELOPMENT INTERN @IVEGTech</li>
            {/* <li>Open Source Contributor in HacktoberFest'23</li> */}
            <li>FRONTEND DEVELOPER @CDC</li>
            <li>FRONTEND DEVELOPER @MMMUT FOOUNDATION</li>
            <li>SOLVED OVER 800+ CODING PROBLEMS ON DIFFERENT PLATFORMS </li>
        </ul>

         </div>
       </div>
     <hr />
      </>
  )
}

export default Education
