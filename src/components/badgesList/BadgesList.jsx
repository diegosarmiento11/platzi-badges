import React from 'react';
import './BadgesList.css';

class BadgesList extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-unstyled BadgesList">
            {this.props.Badges.map((badge) => {
            	return (
                <li className="BadgesListItem" key={badge.id}>
                  <p className="BadgesListItem__avatar">{badge.firstName} {badge.lastName}</p>
                </li>
              )
            })}
          </ul>
      </div>
    );
  }
}   

export default BadgesList;
