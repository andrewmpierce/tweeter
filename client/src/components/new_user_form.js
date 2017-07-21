import React, { Component } from 'react';


class NewUserForm extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/api/user/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      })
    });
}


  render() {
    if (this.props.username) {
      return (<div></div>);
    }
    return (
      <div className="col s6">
        <h6>Sign Up</h6>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
          <input className="waves-effect waves-light btn" type="submit" value="Sign Up" />

        </form>
      </div>
    );
  }
}

export default NewUserForm;
