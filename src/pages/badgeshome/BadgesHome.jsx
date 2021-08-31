import React from 'react';
import { Link } from 'react-router-dom';
import "./BadgesHome.css";

import PlatziConf from '../../assets/images/platziconf-logo.svg'
import Astronauts from '../../assets/images/astronauts.svg'

class BadgesHome extends React.Component {
  render() {
    return (
      <>
        <main className="home">
          <div className="home__container">
            <div className="welcome__container">
              <img src={PlatziConf} alt="Platzi conf logo" />
              <h1>PRINT YOUR BADGES</h1>
              <p>The easiest way to manage your conference</p>
              <Link 
                className="home__button btn btn-primary" 
                to="/badges">
                Start now  
              </Link> 
            </div>
            <div>
              <img src={Astronauts} alt="Astronauts" />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default BadgesHome;
