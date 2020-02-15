import React, { Component } from "react";

export default class Form extends Component {
  state = {
    keyword: ""
  };
  //
  //
  handleSubmit = event => {
    console.log("Submitted");
    event.preventDefault();
    this.props.searchQuotes(this.state.keyword);
  };
  handleChange = event => {
    console.log("Changed");
    this.setState({
      keyword: event.target.value
    });
  };
  //SHOULD UPDATE THE STATE PROPERTY
  //
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="search"
              placeholder="I'm a cute lil searchbar"
              onChange={this.handleChange}
              value={this.state.keyword}
            />
            <input type="submit" value="Inspire me!" />
          </label>
        </form>
      </div>
    );
  }
}
