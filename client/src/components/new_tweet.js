import React, { Component } from 'react';


class NewTweetForm extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props._id);
    fetch('/api/tweet/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: this.props._id,
        tweet: event.target.new_tweet.value
      })
    });
}


  render() {
    return (
      <div>
        <h6>Tweet Away!</h6>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="new_tweet" placeholder="Tweets..." />
          <input type="submit" value="Tweet" />

        </form>
      </div>
    );
  }
}

export default NewTweetForm;
