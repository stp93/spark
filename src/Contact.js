import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="subject" name="subject" />
            <text type="textarea" name="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
