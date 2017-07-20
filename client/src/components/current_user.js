import React from 'react';

const CurrentUser = ({currentUser}) => {
  if (!currentUser) {
    return <div>No User Logged In</div>
  }

  return (
      <h1> {currentUser} is logged in </h1>
  );
};

export default CurrentUser;
