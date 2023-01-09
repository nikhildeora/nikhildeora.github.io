import React from 'react'
import githubstats from "../../assets/githubstats.png"

const Stats = () => {
  return (
    <section className="stats section" id="stats">
    <h2 className="section__title">Github Stats</h2>
    <span className="section__subtitle">Check out my work on Github</span>

    <div className='stats__container container mygrid'>
    <div className='mx-auto shadow-md shadow-blue-500 hover:scale-105 duration-500 sm:px-0'>
        <img className='mx-auto' src={githubstats} alt="github stats" />
        </div>     

        <div className='mx-auto shadow-md shadow-blue-500 hover:scale-105 duration-500'>
        <img className='mx-auto' src="https://camo.githubusercontent.com/0350a585afe45b7664fe15fdd5ee14880f248b3db23c4ff8714e0927cb1a4ae9/68747470733a2f2f73747265616b2d73746174732e64656d6f6c61622e636f6d3f757365723d6e696b68696c64656f7261267468656d653d766973696f6e2d667269656e646c792d6461726b26686964655f626f726465723d74727565" alt="github stats" />
        </div>
    </div>
</section>
  )
}

export default Stats;