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
                <h1> Tech<span>Stack</span></h1>
            </div>
            <ul>
                <li>
                    <h2>Programming -</h2>
                    <span> <i className="fa-light fa-c"></i>
                        <i className="fa-light fa-c">++</i>
                    </span>
                </li>
                <li>
                    <h2>Front-end -</h2>
                    <span><i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3-alt"></i>
                        <i className="fa-brands fa-square-js"></i>

                         {/* <i className="fa-brands fa-angular"></i>
                         <i className="fa-brands fa-react"></i> */}
                    </span>
                </li>
                <li>
                    <h2>Back-end -</h2>
                    <span>
                        <i className="fa-brands fa-node"></i>
                        <i className="fa-brands fa-php"></i>
                        <i className="fa-solid fa-database"></i>
                        {/* <i className="fa-solid fa-e"></i>  */}
                    </span>

                </li>
                <li>
                    <h2>Frameworks</h2>
                    <span>
                        <i className="fa-brands fa-bootstrap"></i>
                        <i className="fa-brands fa-react"></i>
                        <i>Next.Js</i>
                    </span>
                </li>
            </ul>

         </div>
       </div>
     <hr />
      </>
  )
}

export default Education
