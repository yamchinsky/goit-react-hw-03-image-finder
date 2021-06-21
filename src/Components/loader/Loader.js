import React, { Component } from "react";
import Loader from "react-loader-spinner";
import Style from "./Loader.module.css";

export default class App extends Component {
  state = {};

  render() {
    return (
      <div className={Style.spinner}>
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
