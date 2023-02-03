import React from 'react'
import styles from "./skills.module.css"
import cssimg from "../../assets/css.png"
import chakraimg from "../../assets/chakra.png"
import gitimg from "../../assets/git.png"
import githubimg from "../../assets/github.png"
import htmlimg from "../../assets/html.png"
import jsimg from "../../assets/javascript.png"
import nextjsimg from "../../assets/nextjs.png"
import reactimg from "../../assets/react.png"
import tailwindimg from "../../assets/tailwind.png"

const Skills = () => {
    const SkillsArr = [
        {
          id: 1,
          source: htmlimg,
          name: "HTML",
          colour: "#e44d26",
        },
        {
          id: 2,
          source: cssimg,
          name: "CSS",
          colour: "#0277bd",
        },
        {
          id: 3,
          source: jsimg,
          name: "JavaScript",
          colour: "#ffd600",
        },
        {
          id: 4,
          source: reactimg,
          name: "React",
          colour: "#14dbff",
        },
        {
          id: 5,
          source: tailwindimg,
          name: "Tailwind",
          colour: "#44a8b3",
        },
        {
          id: 6,
          source: nextjsimg,
          name: "Next js",
          colour: "black",
        },
        {
          id: 7,
          source: githubimg,
          name: "Github",
          colour: "#3e77bf",
        },
        {
          id: 8,
          source: chakraimg,
          name: "Chakra",
          colour: "#4db6ac",
        },
        {
          id: 9,
          source: gitimg,
          name: "Git",
          colour: "#f2655b",
        },
      ]

    return (
        <section className={styles.skill__section} id="skills">
            <h1 className={styles.skill_heading}>Skills</h1>
            <p className={styles.skill__description}>What I know</p>

        
            <div className={styles.skills__secondmaindiv}>
                <div className={styles.skills_grid_div}>
                    {SkillsArr.map(({id,source,name,colour})=>(
                        <div className={styles.skills__skilldiv} key={id} style={{boxShadow:`0 4px 6px -1px ${colour}, 0 2px 4px -2px ${colour}`}}>
                             <img src={source} alt="skills" />
                             <p>{name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )
}

export default Skills;