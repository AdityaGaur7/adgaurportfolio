import React from 'react'

function Contact() {
  return (
    <div>
         <div class="msg">
        <h1 id="cnt"><span id="contact">LEAVE </span>MESSAGE</h1>
    </div>
         <div class="contact" data-aos="zoom-in">
    
         <div class="sampark">
           <form action="#">
        <input type="text" placeholder="FIRST NAME"/><input type="text" placeholder="LAST NAME"/><br/>
        <input type="email" placeholder="EMAIL"/><input type="number" placeholder="PHONE NO."/><br/>
        <textarea name="" id="" cols="20" rows="10" placeholder="WRITE MESSAGE"></textarea>
        <br/><button type="submit" id="btn">SEND</button>
           </form>
         </div>
         </div>
         <hr />
   </div>

  )
}

export default Contact
 