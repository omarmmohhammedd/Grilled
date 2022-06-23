import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
      <div id="contact">
          <div id="LeftSide">
              
          </div>
          <div id="RightSide">
              <h3 id='Contact_Header'>Contact Us</h3>
              <form method='post' id="form">
                  <label htmlFor='name'>Full Name</label>
                  <input  name = "name" type="text" placeholder='Enter Full Name....' />
                  <label htmlFor='email'>Email</label>
                  <input name='email' type="email" placeholder='Example@gmail.com....' />
                  <label htmlFor='message'>Message</label>
                  <textarea rows="6"  required name='message'></textarea>
                  <button id="from_btn" onClick={(e)=>e.preventDefault()}>Send Message</button>
              </form>
          </div>
    </div>
  )
}

export default Contact