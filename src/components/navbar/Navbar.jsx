import React from 'react';
import { Link } from 'react-router-dom';

import Logo from "../../assets/images/Logo.svg";
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link to="/" className="Navbar-brand">
            <img className="Navbar__brand-logo" src={Logo} alt="Logo"/>
            <span className="First-span">Conference</span> &nbsp;
            <span className="Second-span">Badges</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
