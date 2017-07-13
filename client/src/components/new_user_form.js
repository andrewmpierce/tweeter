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
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" />
        <input type="text" name="password" />
        <input type="submit" value="Submit" />

      </form>
    );
  }
}

export default NewUserForm;
