import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className="contact-container" id='contact'>
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard 
                    icon={<MdOutlineEmail />}
                    link="mailto:adamsmichael46@gmail.com"
                    text="adamsmichael46@gmail.com"
                />
                <ContactInfoCard 
                    icon={<FaGithub />}
                    link="https://github.com/Moadams"
                    text="https://github.com/Moadams"
                    
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe