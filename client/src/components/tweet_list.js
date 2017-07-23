import React, { Component } from 'react';
import NewTweet from './new_tweet';


class TweetList extends Component {
  constructor(props) {
     super(props);
     this.updateTweets = this.updateTweets.bind(this);
     this.state = {tweets: []};

  }


  updateTweets() {
    fetch('/api/tweets')
      .then(res => res.json())
      .then(tweets => {
        this.setState({ tweets });
      });
  }

  componentDidMount() {
    this.updateTweets();
  }

  render() {
    return (
      <div>
        <NewTweet _id={this.props._id} username={this.props.username} onNewTweet={this.updateTweets} />
          <div className="App">
           <h4 className="center-align">Tweets</h4>
           {this.state.tweets.map(tweet =>
             <div className="card-panel" key={tweet._id}>{tweet.username} says: {tweet.text}</div>
           )}
         </div>
     </div>
    );
  }
}

export default TweetList;
