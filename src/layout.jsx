import React from "react";
import Canvas from "./canvas";
// import Title from "./title";
// import Footer from "./footer";
import { SlidesStore, SlidesStoreInitData, stores } from "./stores";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentWillMount() {
    stores.SlidesStore = SlidesStore().init(SlidesStoreInitData);
  }

  async next(event) {
    event.preventDefault();
    await stores.SlidesStore.transition("next");
    await stores.SlidesStore.transition("display");
    this.setState(stores.SlidesStore.data);
  }

  async previous() {
    event.preventDefault();
    await stores.SlidesStore.transition("previous");
    await stores.SlidesStore.transition("display");
    this.setState(stores.SlidesStore.data);
  }

  render() {
    return (
      <React.Fragment>
        <Canvas
          store={stores.SlidesStore.data}
          next={this.next}
          previous={this.previous}
        />
        {/* <Footer next={this.next} previous={this.previous} /> */}
      </React.Fragment>
    );
  }
}
