import React from "react";
import Canvas from "./canvas";
// import Title from "./title";
// import Footer from "./footer";
import { CanvasStore, CanvasStoreInitData, stores } from "./stores";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentWillMount() {
    stores.canvasStore = CanvasStore().init(CanvasStoreInitData);
  }

  async next(event) {
    event.preventDefault();
    await stores.canvasStore.transition("next");
    await stores.canvasStore.transition("display");
    this.setState(stores.canvasStore.data);
  }

  async previous() {
    event.preventDefault();
    await stores.canvasStore.transition("previous");
    await stores.canvasStore.transition("display");
    this.setState(stores.canvasStore.data);
  }

  render() {
    return (
      <React.Fragment>
        {/* <Title title="State machines" /> */}
        <Canvas
          store={stores.canvasStore.data}
          next={this.next}
          previous={this.previous}
        />
        {/* <Footer next={this.next} previous={this.previous} /> */}
      </React.Fragment>
    );
  }
}
