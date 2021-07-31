import React from 'react';
import './Navbar.css';
import Logo from "../../assets/images/Logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a href="/" className="Navbar-brand">
            <img className="Navbar__brand-logo" src={Logo} alt="Logo"/>
            <span className="First-span">Platzi</span>
            <span className="Second-span">Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;