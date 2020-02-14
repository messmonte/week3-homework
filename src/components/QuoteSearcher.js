import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: true
  };
  //
  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(response => response.json())
      .then(data =>
        this.setState({
          quotes: data.results,
          fetching: false
        })
      );
  }
  //
  renderQuote = (quote, index) => {
    return (
      <Quote
        key={index}
        id={quote.id}
        quoteText={quote.quoteText}
        quoteAuthor={quote.quoteAuthor}
      />
    );
  };
  //
  render() {
    const { quotes } = this.state;
    if (this.state.fetching) {
      return <p>Loading...breathe in, breathe out.</p>;
    } else {
      return (
        <div>
          <h1>Quotes</h1>
          {quotes.map(this.renderQuote)}
        </div>
      );
    }
  }
}
