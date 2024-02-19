import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({ icon, text,link}) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            {icon}
        </div>
        <a href={link}>
            {text}
        </a>
    </div>
  )
}

export default ContactInfoCard