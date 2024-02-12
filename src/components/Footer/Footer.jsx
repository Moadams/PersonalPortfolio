import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div className='footer'>
        &copy; {currentYear} Michael Okyere Adams
    </div>
  )
}

export default Footer