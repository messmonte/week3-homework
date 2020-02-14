import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: []
  };
  //
  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(response => response.json())
      .then(data =>
        this.setState({
          quotes: data.results
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

    return (
      <div>
        <h1>Quotes</h1>
        {quotes.map(this.renderQuote)}
      </div>
    );
  }
}
