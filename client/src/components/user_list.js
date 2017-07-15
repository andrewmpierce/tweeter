import React, { Component } from 'react';

class UserList extends Component {
  state = {users: []};

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <div className="App">
         <h1>Users</h1>
         {this.state.users.map(user =>
           <div key={user._id}>{user.username}</div>
         )}
       </div>
     </div>
    );
  }
}

export default UserList;
