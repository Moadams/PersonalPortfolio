import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'

const WorkExperience = () => {
    const sliderRef = useRef()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll:1,
        arrows: false,
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToScroll: 1,
                    slidesToShow:1,
                }
            }
        ]
    }
  return (
    <section className="experience-container">
        <h5>Work Experience</h5>

        <div className="experience-container">
            {/* <div className="arrow-right">
                <span className="material-symbols outlined">right</span>
            </div>
            <div className="arrow-left">
                <span className="material-symbols outlined">chevron_left</span>
            </div> */}
            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item, index)=>(
                <ExperienceCard key={index} details={item} />
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default WorkExperience