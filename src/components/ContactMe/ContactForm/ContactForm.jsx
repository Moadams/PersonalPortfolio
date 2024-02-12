import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className="contact-form-content">
        <form action="">
            <div className="name-container">
                <input type="text" name="firstName" placeholder='First Name' id="" />
                <input type="text" name="lastName" placeholder='Last Name' id="" />
            </div>
            <input type="text" name="email" placeholder='Email' id="" />
            <textarea name="message" placeholder='Message' id="" cols="30" rows="3"></textarea>

            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm