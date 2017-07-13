import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import NewUserForm from './components/new_user_form';
import UserList from './components/user_list';

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <NewUserForm />
        <UserList />
      </div>
    );
  }
}

export default App;
