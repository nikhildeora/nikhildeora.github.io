import React from 'react'
import styles from "./project.module.css"
import fitnexyImg from "../../assets/fitnexyHomepage.png"
import coolmonkImg from "../../assets/coolMonkHomepage.png"
import zoomcarImg from "../../assets/zoomcarHomepage.png"
import cssimg from "../../assets/css.png"
import chakraimg from "../../assets/chakra.png"
import htmlimg from "../../assets/html.png"
import jsimg from "../../assets/javascript.png"
import reactimg from "../../assets/react.png"
import firebaseimg from "../../assets/Firebase.png"
import blackpearlimg from "../../assets/blackpearl.png"
import glowimg from "../../assets/glowproject.png"
import expressimg from "../../assets/expressimg.png"
import mongodbimg from "../../assets/mongodb-seeklogo.svg"
import reduximg from "../../assets/redux-seeklogo.svg"
import nodejsimg from "../../assets/nodejsimage.png"
import chandakaudiimg from "../../assets/chandakaudi.png"
import typescriptimg from "../../assets/typescriptimage.png"
import dsaimg from "../../assets/dsaimage.png"
import socketimg from "../../assets/socketio.png"
import hitAndRUn from "../../assets/hitAndRun.png"

const Project = () => {
  return (
    <section className={styles.project__section} id="projects">
      <h1 className={styles.project__heading}>Projects</h1>
      <p className={styles.project__description}>Check out some of my work right here</p>

      <div className={styles.projects__secondMaindiv}>
        <div className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img src={fitnexyImg} alt="fitnexy" className={styles.projects__divimage} />
            </div>
            <div className={styles.projects__content}>
              <h2>Fitnexy <br /> <span>Inspired by Jefit.com</span></h2>
              <p>Fitnexy is a platform where you can create your exercise plan. Here you can find some default plans for beginners, intermediates, and experts and you can also create your own plan.</p>


              <div className={styles.projects__teckimagefitnexy}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src={reactimg} alt="css" />
                  <p>React</p>
                </div>
                <div>
                  <img src={firebaseimg} alt="css" />
                  <p>Firebase</p>
                </div>
                <div>
                  <img src={chakraimg} alt="css" />
                  <p>Chakra</p>
                </div>
              </div>




              <div className={styles.projects__buttondiv}>
                <a href="https://github.com/nikhildeora/apathetic-frog-3223" target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-github"></i>{" "}Github</button>
                </a>
                <a href='https://dashing-dodol-3990d1.netlify.app/' target="_blank" passHref >
                  <button className={styles.projects__button}><i class="uil uil-globe"></i>{" "}Live</button>
                </a>
              </div>
            </div>
          </div>
        </div>



        <div className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img src={coolmonkImg} alt="fitnexy" className={styles.projects__divimage} />
            </div>
            <div className={styles.projects__content}>
              <h2>Cool Monk <br /> <span>Inspired by shop.com</span></h2>
              <p>Cool Monk is an Ecommerce Website where you can find a variety of clothes, accessories, jewelry, electronics, beauty products, and more  </p>
              <div className={styles.projects__teckimage}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>

              </div>

              <div className={styles.projects__buttondiv}>
                <a href="https://github.com/nikhildeora/delightful-secretary-78" target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-github"></i>{" "}Github</button>
                </a>
                <a href='https://prismatic-lolly-ef78c1.netlify.app/' target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-globe"></i>{" "}Live</button>
                </a>
              </div>
            </div>
          </div>
        </div>



        <div className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img src={zoomcarImg} alt="fitnexy" className={styles.projects__divimage} />
            </div>
            <div className={styles.projects__content}>
              <h2>Zoomcar <br /> <span>Inspired by zoomcar.com</span></h2>
              <p>Zoomcar is a car-sharing platform. We can book any car here which are available and also can put our own car on this platform and make earnings by this platform.</p>

              <div className={styles.projects__teckimage}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>

              </div>
              <div className={styles.projects__buttondiv}>
                <a href="https://github.com/nikhildeora/insidious-experience-328" target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-github"></i>{"  "}Github</button>
                </a>
                <a href="https://amazing-sunburst-64f0c0.netlify.app/" target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-globe"></i>{" "}Live</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img src={blackpearlimg} alt="fitnexy" className={styles.projects__divimage} />
            </div>
            <div className={styles.projects__content}>
              <h2>Black Pearl <br /> <span>Inspired by Caratlane.com</span></h2>
              <p>Black Pearl is an Ecommerce Website where you can find a variety of jewelleries of Gold, Platinum, Solitiare, Diamond, Silver, etc and more</p>


              <div className={styles.projects__teckimagefitnexy}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src={reactimg} alt="css" />
                  <p>React</p>
                </div>
                <div>
                  <img src={firebaseimg} alt="css" />
                  <p>Firebase</p>
                </div>
                <div>
                  <img src={chakraimg} alt="css" />
                  <p>Chakra</p>
                </div>
              </div>




              <div className={styles.projects__buttondiv}>
                <a href="https://github.com/nikhildeora/common-tank-1254" target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-github"></i>{" "}Github</button>
                </a>
                <a href='https://startling-tulumba-8a76b2.netlify.app/' target="_blank" passHref >
                  <button className={styles.projects__button}><i class="uil uil-globe"></i>{" "}Live</button>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img src={glowimg} alt="glowproject" className={styles.projects__divimage} />
            </div>
            <div className={styles.projects__content}>
              <h2>GlowUp Cosmetics <br /> <span>Inspired by Nykaa.com</span></h2>
              <p>GlowUp Cosmetics is an Ecommerce Website where you can buy Cosmetics and Beauty products. You can also browse makeup, health products, and more.</p>


              <div className={styles.projects__teckimagegowup}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div className={styles.project_glowup_extra_tech}>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div className={styles.project_glowup_extra_tech}>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src={reactimg} alt="css" />
                  <p>React</p>
                </div>
                <div>
                  <img src={reduximg} alt="css" />
                  <p>Redux</p>
                </div>
                <div>
                  <img src={chakraimg} alt="css" />
                  <p>Chakra</p>
                </div>
                <div>
                  <img src={mongodbimg} alt="css" />
                  <p>MongoDB</p>
                </div>
                <div>
                  <img src={expressimg} alt="css" />
                  <p>Express</p>
                </div>
                <div>
                  <img src={nodejsimg} alt="css" />
                  <p>NodeJS</p>
                </div>
              </div>




              <div className={styles.projects__buttondiv}>
                <a href="https://github.com/gk072745/nifty-wave-512" target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-github"></i>{" "}Github</button>
                </a>
                <a href='https://glowup-com.netlify.app/' target="_blank" passHref >
                  <button className={styles.projects__button}><i class="uil uil-globe"></i>{" "}Live</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img src={chandakaudiimg} alt="gameimg" className={styles.projects__divimage} />
            </div>
            <div className={styles.projects__content}>
              <h2>Chanda Kaudi <br /> <span>Old time Game sort of similar to Ludo</span></h2>
              <p>The game is played with a board that has four colored squares, each with a set of four hourses, and a central cross-shaped square that serves as a starting and finishing point for each player's pieces.</p>


              <div className={styles.projects__teckimagegowup}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div >
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div >
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img src={reactimg} alt="css" />
                  <p>React</p>
                </div>
                <div>
                  <img src={typescriptimg} alt="css" />
                  <p>TypeScript</p>
                </div>
                <div>
                  <img src={reduximg} alt="css" />
                  <p>Redux</p>
                </div>
                <div>
                  <img src={chakraimg} alt="css" />
                  <p>Chakra</p>
                </div>
                <div>
                  <img src={mongodbimg} alt="css" />
                  <p>MongoDB</p>
                </div>
                <div>
                  <img src={expressimg} alt="css" />
                  <p>Express</p>
                </div>
                <div>
                  <img src={nodejsimg} alt="css" />
                  <p>NodeJS</p>
                </div>
                <div>
                  <img src={dsaimg} alt="css" />
                  <p>DSA</p>
                </div>
                <div>
                  <img src={socketimg} alt="css" />
                  <p>Socket</p>
                </div>
              </div>




              <div className={styles.projects__buttondiv}>
                <a href="https://github.com/abhayfaldu/Chanda_kaudi_game" target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-github"></i>{" "}Github</button>
                </a>
                <a href='https://chanda-kaudi-game.vercel.app/' target="_blank" passHref >
                  <button className={styles.projects__button}><i class="uil uil-globe"></i>{" "}Live</button>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.projects__outerDiv}>
          <div className={styles.projects__maindiv}>
            <div className={styles.projects__imgouterdiv}>
              <img src={hitAndRUn} alt="fitnexy" className={styles.projects__divimage} />
            </div>
            <div className={styles.projects__content}>
              <h2>Hit & Run <br /> <span>A fun Game</span></h2>
              <p>Join the adventurous dog in a fast-paced, action-packed game! Run, jump, dive, and boost your way to victory, earning scores as you take on enemies. It's non-stop fun!  </p>
              <div className={styles.projects__teckimage}>
                <div>
                  <img src={htmlimg} alt="css" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src={cssimg} alt="css" />
                  <p>CSS</p>
                </div>
                <div>
                  <img src={jsimg} alt="css" />
                  <p>JavaScript</p>
                </div>

              </div>

              <div className={styles.projects__buttondiv}>
                <a href="https://github.com/nikhildeora/Hit_and_run_game" target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-github"></i>{" "}Github</button>
                </a>
                <a href='https://6538d39431fa4c6c3dd41625--hilarious-marigold-fe2c84.netlify.app/' target="_blank" passHref>
                  <button className={styles.projects__button}><i class="uil uil-globe"></i>{" "}Live</button>
                </a>
              </div>
            </div>
          </div>
        </div>

 

      </div>

    </section >
  )
}

export default Project;