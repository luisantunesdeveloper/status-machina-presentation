import React from "react";
import Button from "./button";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button title="<" click={this.props.previous} />
        <Button title=">" click={this.props.next} />
        <Button title={this.props.zoomIn ? "Zoom out" : "Zoom in"} />
      </div>
    );
  }
}
