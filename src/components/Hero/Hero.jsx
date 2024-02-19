import React from 'react'
import './Hero.css'
import Me from "../../assets/images/me.jpg"
import ReactIcon from "../../assets/images/react.png"
import Django from "../../assets/images/django.png"
import JS from "../../assets/images/js.png"
import HTML from "../../assets/images/html.png"

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Passionate Full Stack Developer | Transforming ideas into Seamless and Visually Stunning Web Solutions
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={ReactIcon} alt="react" />
                </div>
                <img src={Me} alt="me" />
            </div>
            <div>
                <div className="tech-icon">
                    <img src={Django} alt="react" />
                </div>
                <div className="tech-icon">
                    <img src={HTML} alt="react" />
                </div>
                <div className="tech-icon">
                    <img src={JS} alt="react" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero