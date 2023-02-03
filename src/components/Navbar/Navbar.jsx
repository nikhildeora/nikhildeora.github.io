import React from 'react'
import { useState } from 'react'
import styles from "./navbar.module.css"
import Nikhil_Deora_Resume from "../../assets/Nikhil_Deora_Resume.pdf"

const Navbar = () => {
const [toggle,setToggle] = useState(false);

    return (
        <div id={styles.navbar__fixeddiv}>
        <div id={styles.navbar__maindiv}>
            <div className={styles.navbar__logodiv}>
               <div className={styles.navbar__hemberger}>  <i onClick={()=>setToggle(!toggle)} className="uil uil-bars"></i>  
                </div>
                <p className={styles.navbar__logo}>Nikhil</p>
            </div>
            <ul type="none" className={toggle ? `${styles.navbar__showlist} ${styles.navbar__list}` : styles.navbar__list}>
                <li><a href="#home"><i className={`uil uil-estate ${styles.navbar__icon}`}> </i> Home</a> </li>
                <li><a href="#about"> <i className={`uil uil-user ${styles.navbar__icon}`}>
                </i> About</a> </li>
                <li><a href="#skills"> <i className={`uil uil-file-alt ${styles.navbar__icon}`}>
                </i> Skills</a> </li>
                <li><a href="#projects"> <i className={`uil uil-scenery ${styles.navbar__icon}`}>
                </i> Projects</a> </li>
                <li><a href="#stats"> <i className={`uil uil-github-alt ${styles.navbar__icon}`}>
                </i> Stats</a> </li>
                <li><a href="#contact"> <i className={`uil uil-message ${styles.navbar__icon}`}>
                </i> Contact</a> </li>
                <li><a onClick={() =>
                                window.open(
                                    `https://drive.google.com/file/d/10gcj2_8-ZXwjgekaawHwj70bA9XS5S1F/view?usp=share_link`
                                )
                            } href={Nikhil_Deora_Resume} target="_blank" download="Nikhil_Deora_Resume"
                                rel="noreferrer"><i className={`uil uil-file-alt ${styles.navbar__icon}`}>
                                </i> Resume </a> </li>

                <div></div>
                
                <i onClick={()=>setToggle(!toggle)} className={`uil uil-times ${styles.navbar__cross_icon}`}></i>
            </ul>
        </div>
        </div>
    )
}

export default Navbar;