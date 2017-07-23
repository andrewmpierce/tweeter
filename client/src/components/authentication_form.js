import React, { Component } from 'react';


class AuthenticationForm extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
     if (this.props.action === 'login') {
       this.state =  {
         url: '/api/user/login',
         button: 'Login',
         action: 'login',
       };
     } else {
       this.state =  {
         url: '/api/user/new',
         button: 'Sign Up',
         action: 'signin',
       };
     }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.url);
    fetch(this.state.url, {
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
        } if (response.response === "Successfully created user") {
            this.setState({action:"login"});
            
        }
    })
}


  render() {
    if (this.props.username) {
      return (<div></div>);
    }
    return (
      <div className="col s6">
        <h6>{this.state.button}</h6>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
          <input className="waves-effect waves-light btn" type="submit" value={this.state.button} />

        </form>
      </div>
    );
  }
}

export default AuthenticationForm;
