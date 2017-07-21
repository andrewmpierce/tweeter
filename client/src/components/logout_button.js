import React from 'react';

const Logout = ({onUserLogOut}) => {
  function logout () {
    localStorage.clear();
    onUserLogOut();
  }


  return (
    <div>
      <button className="waves-effect waves-light btn" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default Logout;
