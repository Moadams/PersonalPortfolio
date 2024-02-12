import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
    }
      return (
    <div>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className="nav-wrapper">
            <div className="nav-content">
                <p className="logo">
                    DevChael
                </p>

                <ul>
                    <li>
                        <a className="menu-item">Home</a>
                    </li>
                    <li>
                        <a href='#skills' className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a href='#experience' className="menu-item">Work Experience</a>
                    </li>
                    <li>
                        <a href='#contact' className="menu-item">Contact Me</a>
                    </li>

                    <button className="contact-btn" onClick={()=>{}}>
                        Hire Me
                    </button>
                </ul>

                <button class="menu-btn" onClick={()=>{toggleMenu()}}>
                    <span class={"material-symbols-outlined"} style={{fontSize:"1.8rem"}}>
                        {openMenu ? "o" : "c"}
                    </span>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar