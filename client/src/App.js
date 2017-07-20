import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import NewUserForm from './components/new_user_form';
import UserSignInForm from './components/user_sign_in';
import UserList from './components/user_list';

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <NewUserForm />
        <UserSignInForm />
        <UserList />
      </div>
    );
  }
}

export default App;
