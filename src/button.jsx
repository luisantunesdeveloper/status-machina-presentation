import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.click} style={{ marginLeft: "10px" }}>
        {this.props.title}
      </button>
    );
  }
}
