import React, { Component } from "react";

export default class ButtonNext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  handleChange = value => {
    this.setState({ input: value });
  };
  

  render() {
    return  <button onClick={this.props.next}>  Next </button>
  }
}
