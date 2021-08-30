import React from 'react';

import Badge from "../../components/badge/Badge.jsx";
import BadgeForm from "../../components/badgeForm/BadgeForm.jsx";

import header from "../../assets/images/badge-header.svg";

import "./BadgeNew.css";

class BadgeNew extends React.Component {

  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    }
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Header"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                jejeChange={this.handleChange}
                formValue={this.state.form}/>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default BadgeNew;
