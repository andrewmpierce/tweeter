import React, { Component } from 'react';
import Header from './components/header';
import NewUserForm from './components/new_user_form';
import UserSignInForm from './components/user_sign_in';
import TweetList from './components/tweet_list';
import CurrentUser from './components/current_user';
import './css/materialize.css';

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
      <div className="grey lighten-4">
        <Header />
        <CurrentUser currentUser={this.state.currentUser} onUserLogOut={this.updateCurrentUser} />
        <div className="row">
          <NewUserForm username={this.state.currentUser} />
          <UserSignInForm username={this.state.currentUser} onUserLogIn={this.updateCurrentUser} />
        </div>
        <TweetList _id={this.state.currentUserID} username={this.state.currentUser} />
      </div>
    );
  }
}

export default App;
