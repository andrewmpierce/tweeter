import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <Header />
    );
  }
}

export default App;
