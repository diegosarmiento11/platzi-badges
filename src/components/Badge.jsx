import React from 'react';
import confLogo from "../assets/images/badge-header.svg";
import profilePic from "../assets/images/profilepic.jpeg";
import './Badge.css';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img 
          className="Badge__avatar"
          src={profilePic} 
          alt="Avatar" />
          <h1>
            Diego <br /> Sarmiento
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@diegolegaltech</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;

