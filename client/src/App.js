import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import NewUserForm from './components/new_user_form';
class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/api/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
      console.log(this.state.users);
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
      <Header />
      <NewUserForm />
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
