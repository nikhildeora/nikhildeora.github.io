import React from 'react'
import styles from "./stats.module.css"
import GitHubCalendar from 'react-github-calendar';

const Stats = () => {
  return (
    <section className={styles.stats__section} id="stats">
      <h1 className={styles.stats__heading}>Github Stats</h1>
      <p className={styles.stats__description}>Check out my work on Github</p>

      <div className={styles.stats__maindiv}>
       
       <div>
        <GitHubCalendar username='nikhildeora' blockSize={20} />
        </div>

        <div className={styles.stats__imagediv}>
          <img className={styles.stats__image} src="https://camo.githubusercontent.com/0350a585afe45b7664fe15fdd5ee14880f248b3db23c4ff8714e0927cb1a4ae9/68747470733a2f2f73747265616b2d73746174732e64656d6f6c61622e636f6d3f757365723d6e696b68696c64656f7261267468656d653d766973696f6e2d667269656e646c792d6461726b26686964655f626f726465723d74727565" alt="github stats" />
        </div>
      </div>
    </section>
  )
}

export default Stats;