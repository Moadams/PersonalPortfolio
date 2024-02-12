import React, { useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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

    const slideRight = () => {
        sliderRef.current.slickNext()
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }
  return (
    <section className="experience-container" id='experience'>
        <h5>Work Experience</h5>

        <div className="experience-container">
            <div className="arrow-right" onClick={()=>slideLeft()}>
                <span className="material-symbols outlined"><IoIosArrowBack /></span>
            </div>
            <div className="arrow-left" onClick={()=>slideRight()}>
                <span className="material-symbols outlined"><IoIosArrowForward /></span>
            </div>
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