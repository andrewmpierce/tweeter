import React, { Component } from 'react';


class NewTweetForm extends Component {
  constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    fetch('/api/tweet/new', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: this.props._id,
        text: event.target.new_tweet.value,
        username: this.props.username
      })
    });
    this.props.onNewTweet();
}


  render() {
    return (
      <div className="row">
        <div className="col s12 left-align">
          <h4>Tweet Away!</h4>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="new_tweet" placeholder="Tweets..." />
            <input className="waves-effect waves-light btn" type="submit" value="Tweet" />

          </form>
        </div>
      </div>
    );
  }
}

export default NewTweetForm;
