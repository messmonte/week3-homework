import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.quoteText} <br></br>by {this.props.quoteAuthor}
        </p>
      </div>
    );
  }
}
