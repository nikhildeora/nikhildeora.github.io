import React from 'react'
import cssimg from "../../assets/css.png"
import chakraimg from "../../assets/chakra.png"
import gitimg from "../../assets/git.png"
import githubimg from "../../assets/github.png"
import htmlimg from "../../assets/html.png"
import jsimg from "../../assets/javascript.png"
import nextjsimg from "../../assets/nextjs.png"
import reactimg from "../../assets/react.png"
import tailwindimg from "../../assets/tailwind.png"
import "./skill.css"

const Skills = () => {
  const Tecks = [
    {
      id: 1,
      src: htmlimg,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssimg,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: jsimg,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactimg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwindimg,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjsimg,
      title: "Next js",
      style: "shadow-black",
    },
    {
      id: 7,
      src: githubimg,
      title: "Github",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: chakraimg,
      title: "Chakra",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: gitimg,
      title: "Git",
      style: "shadow-orange-600",
    },
  ]

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">What I Know</span>

      <div className="skills__container container mygrid w-full grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

        {Tecks.map(({ id, src, title, style }) => (
          <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img className='w-20 mx-auto' src={src} alt="image" />
            <p className='mt-4 font-bold'>{title}</p>
          </div>
        ))}


      </div>

    </section>
  )
}

export default Skills;