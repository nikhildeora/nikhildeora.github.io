import React, { useState } from 'react'
import "./headers.css"

const Headers = () => {

    const [toggle, showMenu] = useState(false)

    return (
        <header className="header">
            <div className="mynav container">
                <a href="index.html" className="nav__logo">Nikhil</a>
                
                <div className={toggle ? "nav__menuh show-menu" : "nav__menuh"}>
                    <ul className="nav__list mygrid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon">
                                </i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link active-link">
                                <i className="uil uil-user nav__icon">
                                </i>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link active-link">
                                <i className="uil uil-file-alt nav__icon">
                                </i>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link active-link">
                                <i className="uil uil-scenery nav__icon">
                                </i>
                                Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#stats" className="nav__link active-link">
                                <i className="uil uil-github-alt nav__icon">
                                </i>
                                Stats
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link active-link">
                                <i className="uil uil-message nav__icon">
                                </i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__closed" onClick={() => showMenu(!toggle)}></i>
                </div>
                <div className="nav__toggled" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
               
            </div>
        </header>
    )
}

export default Headers;


