import React, { Component } from "react";
import Image from "./Assets/images/chevelle.png";

export default class Cars extends Component {
  render() {
    return (
      <div>
        <h3>Classic Style</h3>
        <h3>Modern Features</h3>
        <div className="Camaro">
          <img src={Image} alt="" />
        </div>
      </div>
    );
  }
}
