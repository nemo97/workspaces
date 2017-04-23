import React from "react"

import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  
  componentWillMount() {
    this.props.dispatch(fetchUser())
    this.props.dispatch(fetchTweets())
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    //const { user, tweets } = this.props;

    //f (!tweets.length) {
    //  return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    //}

      //var mappedTweets = [];
    //  if(tweets.length>0){
    //    tweets.map(tweet =>  { mappedTweets.push("<li key="+tweet.id+" >"+tweet.text+"</li>")})
    //    console.log("....mappedTweets:"+mappedTweets)
    //  }
    //<button onClick={this.fetchTweets.bind(this)}>load tweets</button>
//     <ul>{mappedTweets}</ul>

    //his.props.tweets.map((item) => console.log(" "+item.id+" .."+item.text))
   const mappedTweets = this.props.tweets.map((item,index) => { return <li key={index}>{item.id}</li>})
  
    const numbers = [1, 2, 3, 4, 5,undefined];
    let listItems = numbers.map((number) =>
      <li key={number}>{number}</li>
    );
    return <div>
      <h1>{this.props.user.name}</h1>
      <h1>{this.props.tweets.length}</h1>
      <ul>
        {listItems}
        {mappedTweets}
      </ul>  
    </div>
  }
}
