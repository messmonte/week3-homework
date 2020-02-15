import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    const greenText = {
      color: "green",
      fontWeight: "bold"
    };
    const redText = {
      color: "red",
      fontWeight: "bold"
    };
    return (
      <div>
        <p
          style={
            this.props.liked === 0
              ? null
              : this.props.liked === 1
              ? greenText
              : redText
          }
        >
          {this.props.quoteText} <br></br>by{" "}
          {this.props.quoteAuthor ? this.props.quoteAuthor : "Anonymous"}
          <button onClick={() => this.props.setLiked(this.props.id, 1)}>
            :)
          </button>
          <button onClick={() => this.props.setLiked(this.props.id, -1)}>
            :(
          </button>
        </p>
      </div>
    );
  }
}
