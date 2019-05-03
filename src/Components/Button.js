import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <p className={`${this.props.classNamesToChild} dim bb pointer`}
        onClick={this.props.onButtonSubmit}>
        {this.props.children}
      </p>
    )
  }
}
