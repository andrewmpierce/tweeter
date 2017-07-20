import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import NewUserForm from './components/new_user_form';
import UserSignInForm from './components/user_sign_in';
import UserList from './components/user_list';
import CurrentUser from './components/current_user';

class App extends Component {
  constructor(props) {
     super(props);
     this.updateCurrentUser = this.updateCurrentUser.bind(this);

  }

  state = {currentUser: localStorage.getItem('userLoggedIn')};


  updateCurrentUser() {
    this.setState({currentUser: localStorage.getItem('userLoggedIn') });
  }

  render() {
    return (
      <div>
        <Header />
        <CurrentUser currentUser={this.state.currentUser} />
        <NewUserForm />
        <UserSignInForm onUserLogIn={this.updateCurrentUser} />
        <UserList />
      </div>
    );
  }
}

export default App;
