import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: [],
    likedQuotes: 0,
    dislikedQuotes: 0,
    fetching: true
  };
  //
  componentWillMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(response => response.json())
      .then(data => {
        return this.setState({
          quotes: data.results.map(quote => {
            return {
              ...quote,
              liked: 0
            };
          }),
          fetching: false
        });
      });
  }

  setLiked = (id, liked) => {
    console.log("hello!", id, liked);
    const quoteArray = [...this.state.quotes];

    quoteArray.map(quote => {
      if (quote._id === id) {
        quote.liked = liked;
      }
    });
    this.setState({
      quotes: quoteArray
    });
  };
  //
  likedAndDisliked = val => {
    let res = 0;

    this.state.quotes.map(curr => {
      if (curr.liked === val) res++;
    });

    return res;
  };
  //
  renderQuote = (quote, index) => {
    return (
      <Quote
        key={index}
        id={quote._id}
        liked={quote.liked}
        quoteText={quote.quoteText}
        quoteAuthor={quote.quoteAuthor}
        setLiked={this.setLiked}
      />
    );
  };
  //
  render() {
    const quotes = this.state.quotes;
    if (this.state.fetching) {
      return <p>Loading...breathe in, breathe out.</p>;
    } else {
      return (
        <div>
          <h1>Quotes</h1>
          <h2>
            Liked: {this.likedAndDisliked(1)}/ Disliked:{" "}
            {this.likedAndDisliked(-1)}
          </h2>
          {quotes.map(this.renderQuote)}
        </div>
      );
    }
  }
}
