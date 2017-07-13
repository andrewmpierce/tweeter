import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(users => this.setState({ users }));
      console.log(this.state.users);
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
      <Header />
        <div className="App">
         <h1>Users</h1>
         {this.state.users.map(user =>
           <div key={user.id}>{user.username}</div>
         )}
       </div>
     </div>
    );
  }
}

export default App;
