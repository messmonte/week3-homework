import React, { Component } from "react";
import Quote from "./Quote";
import Form from "./Form";

export default class QuoteSearcher extends Component {
  state = {
    quotes: [],
    likedQuotes: 0,
    dislikedQuotes: 0,
    fetching: false,
    name: ""
  };
  //
  searchQuotes = keyword => {
    this.setState({
      //NOW WE GONNA FETCH
      fetching: true
    });

    fetch(`https://quote-garden.herokuapp.com/quotes/search/${keyword}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          name: "",
          quotes: data.results.map(quote => {
            return {
              ...quote,
              liked: 0
            };
          }),
          //RESET FETCHING TO FALSE SO IT STOPS
          fetching: false
        });
      });
  };

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
    const allQuotes = this.state.quotes;
    const quoteList = allQuotes.reduce((acc, curr) => {
      if (acc.map(quote => quote.quoteText).includes(curr.quoteText)) {
        return acc;
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);

    if (this.state.fetching) {
      return <p>Loading...breathe in, breathe out.</p>;
    } else if (!this.state.fetching) {
      return (
        <div>
          <Form searchQuotes={this.searchQuotes} />
          <h1>Quotes</h1>
          <h2>
            Liked: {this.likedAndDisliked(1)}/ Disliked:{" "}
            {this.likedAndDisliked(-1)}
          </h2>
          <ol>
            {quoteList.length === 0 ? (
              <p>Please, type something you'd like to see.</p>
            ) : (
              quoteList.map(this.renderQuote)
            )}
          </ol>
        </div>
      );
    }
  }
}
