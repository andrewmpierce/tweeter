import React from 'react';
import LogoutButton from './logout_button';


const CurrentUser = ({currentUser, onUserLogOut}) => {
  if (!currentUser) {
    return <div></div>
  }

  return (
    <div className="row">
            <div className="col s12 m2" />
            <div className="col s12 m8">
              <div className="card grey lighten-3">
                <div className="card-content black-text center-align">
                  <span className="card-title">Logged in as: {currentUser} </span>
                </div>
                <div className="card-action center-align">
                  <LogoutButton onUserLogOut={onUserLogOut} />
                </div>
              </div>
            </div>
            <div className="col s12 m2" />
          </div>

  );
};

export default CurrentUser;
