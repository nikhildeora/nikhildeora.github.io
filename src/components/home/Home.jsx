import React from 'react'
import Data from './Data';
import "./home.css"
import ScrollDown from './ScrollDown';
import Social from './Social';

const Home = () => {
  return (
    <section className='home section' id="home">
        <div className="home__container container mygrid" >
            <div className="home__content mygrid">
                <Social />

                <div className="home__img">
                </div>
                  <Data />
            </div>

            <ScrollDown />
        </div>
    </section>
  )
}

export default Home;