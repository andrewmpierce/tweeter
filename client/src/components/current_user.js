import React from 'react';

const CurrentUser = ({currentUser}) => {
  if (!currentUser) {
    return <div></div>
  }

  return (
    <div className="row">
      <p className="left section">Logged in as: {currentUser} </p>
    </div>
  );
};

export default CurrentUser;
