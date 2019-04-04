import React from "react";
import Node from "./node";
import { StatesStore } from "./stores";

export default class Tree extends React.Component {
  constructor(props) {
    super(props);
  }

  renderNodes() {
    return StatesStore.data.map(node => {
      <Node description={node.description} />;
    });
  }

  render() {
    return <ul>{this.renderNodes()}</ul>;
  }
}
