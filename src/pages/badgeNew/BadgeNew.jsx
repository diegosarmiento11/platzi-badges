import React from 'react';
import "./BadgeNew.css";
import Badge from "../../components/badge/Badge.jsx";
import BadgeForm from "../../components/badgeForm/BadgeForm.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import header from "../../assets/images/badge-header.svg";

class BadgeNew extends React.Component {
  render() {
    return (
      <>
        <Navbar/>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Header"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Diego"
                lastName="Sarmiento"
                jobTitle="frontend engineer"
                twitter="diegolegaltech"
              />
            </div>
            <div className="col-6">
              <BadgeForm/>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default BadgeNew;