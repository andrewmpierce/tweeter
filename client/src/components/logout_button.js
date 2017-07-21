import React from 'react';

const Logout = ({onUserLogIn}) => {
  function logout () {
    localStorage.clear();
    onUserLogIn();
  }

  return (
    <div className="row">
      <button className="waves-effect waves-light btn" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default Logout;
