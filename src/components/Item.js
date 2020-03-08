import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div className="bg-light p-2 pl-4">{this.props.item}</div>;
  }
}
