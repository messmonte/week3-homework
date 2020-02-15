import React, { Component } from "react";

export default class Quote extends Component {
  state = {
    likeCounter: 0,
    dislikeCounter: 0
  };
  //
  // likeQuote = quoteText => {
  //   return (quoteText.style = "font-style=bold;color:green;");
  // };
  // //
  // dislikeQuote = text => {
  //   return ();
  // };
  //
  render() {
    return (
      <div>
        <p id="quoteParagraph">
          {this.props.quoteText} <br></br>by {this.props.quoteAuthor}
          <button onClick={(this.props.quoteText.style = "green")}>:)</button>
          <button onClick={(this.props.quoteText.style = "red")}>:(</button>
        </p>
      </div>
    );
  }
}
