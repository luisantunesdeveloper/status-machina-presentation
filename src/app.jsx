import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout />
      </React.Fragment>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
