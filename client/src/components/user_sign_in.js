import React, { Component } from 'react';


class UserSignInForm extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      })
    }).then(response => response.json())
      .then(response => {
        if (response.response === "Successfully logged in") {
          localStorage.setItem('userLoggedIn', response.session.passport.user.username);
          localStorage.setItem('userLoggedInID', response.session.passport.user._id);
          this.props.onUserLogIn();
        }
    })
}


  render() {
    if (this.props.username) {
      return (<div></div>);
    }
    return (
      <div className="col s6">
        <h6>Login</h6>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
          <input className="waves-effect waves-light btn" type="submit" value="Login" />

        </form>
      </div>
    );
  }
}

export default UserSignInForm;
