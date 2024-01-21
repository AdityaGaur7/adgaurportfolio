import React from 'react'

function Contact() {
  return (
    <div>
         <div class="msg">
        <h1 id="cnt">Leave <span id="contact">Message</span></h1>
    </div>
         <div class="contact" data-aos="zoom-in">
    
         <div class="sampark">
           <form action="#">
        <input type="text" placeholder="First Name"/><input type="text" placeholder="Last Name"/><br/>
        <input type="email" placeholder="Email"/><input type="number" placeholder="Phone no."/><br/>
        <textarea name="" id="" cols="20" rows="10" placeholder="Write Message"></textarea>
        <br/><button type="submit" id="btn">Send</button>
           </form>
         </div>
         </div>
         <hr />
   </div>

  )
}

export default Contact
 