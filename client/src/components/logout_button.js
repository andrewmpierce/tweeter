import React from 'react';

const Logout = ({onUserLogIn}) => {
  function logout () {
    localStorage.clear();
    onUserLogIn();
  }

  return (
    <button onClick={logout}>
      Log Out
    </button>
  );
};

export default Logout;
