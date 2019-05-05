import React, { Component } from 'react'

export default class Rank extends Component {
  render() {
    return (
      <div className="main-view pa4">
        Hello, Aris.<br />
        You are &nbsp;
        <span style={{ fontSize: "1.2em" }}>#</span>
        <span style={{ fontSize: "1.6em" }}>3</span>      &nbsp;
        with                 &nbsp;
        <span style={{ fontSize: "1.2em" }}>12</span>      &nbsp;
        faces recognised.
      </div>
    )
  }
}
