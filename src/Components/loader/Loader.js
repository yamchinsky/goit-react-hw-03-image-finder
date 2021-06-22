import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class App extends Component {
  render() {
    return (
      <div className="spinner">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={30}
          width={50}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
