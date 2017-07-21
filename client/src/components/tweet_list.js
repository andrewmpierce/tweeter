import React, { Component } from 'react';

class TweetList extends Component {
  state = {tweets: []};

  componentDidMount() {
    fetch('/api/tweets')
      .then(res => res.json())
      .then(tweets => {
        this.setState({ tweets });
        console.log(tweets);
      })
  }

  render() {
    return (
      <div>
        <div className="App">
         <h1>Tweets</h1>
         {this.state.tweets.map(tweet =>
           <div key={tweet._id}>{tweet.username} says: {tweet.text}</div>
         )}
       </div>
     </div>
    );
  }
}

export default TweetList;
