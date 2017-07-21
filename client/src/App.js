import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import NewUserForm from './components/new_user_form';
import UserSignInForm from './components/user_sign_in';
import TweetList from './components/tweet_list';
import CurrentUser from './components/current_user';
import LogoutButton from './components/logout_button';

class App extends Component {
  constructor(props) {
     super(props);
     this.updateCurrentUser = this.updateCurrentUser.bind(this);

  }

  state = {
    currentUser: localStorage.getItem('userLoggedIn'),
    currentUserID: localStorage.getItem('userLoggedInID')
  };


  updateCurrentUser() {
    this.setState({
      currentUser: localStorage.getItem('userLoggedIn'),
      currentUserID: localStorage.getItem('userLoggedInID')
     });
  }

  render() {
    return (
      <div>
        <Header />
        <CurrentUser currentUser={this.state.currentUser} />
        <NewUserForm />
        <UserSignInForm onUserLogIn={this.updateCurrentUser} />
        <LogoutButton onUserLogIn={this.updateCurrentUser} />
        <TweetList _id={this.state.currentUserID} username={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
