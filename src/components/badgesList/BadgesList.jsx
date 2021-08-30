import React from 'react';
import './BadgesList.css';
import Twitter from "../../assets/images/twitter.png";

class BadgesList extends React.Component {
  render() {
    return (
      <>
        <ul className="list-unstyled BadgesList">
            {this.props.Badges.map((badge) => {
            	return (
                <li className="BadgesListItem" key={badge.id}>
                  <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="Avatar" />
                  <div className="BadgesData__container">
                    <p className="Badges__p">
                      <strong>
                        {badge.firstName} &nbsp;
                        {badge.lastName}
                      </strong>
                    </p>
                    <div className="Badges__twitter">
                      <img className="Bagdes__image" src={Twitter} alt="Twitter icon" />
                      <p className="Badges__p">@{badge.twitter}</p>
                    </div>
                    <p className="Badges__p">{badge.jobTitle}</p>
                  </div>
                </li>
              )
            })}
          </ul>
      </>
    );
  }
}   

export default BadgesList;

