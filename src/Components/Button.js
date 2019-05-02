import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <p className={`${this.props.classNamesToChild} dim bb pointer`}>
        {this.props.children}
      </p>
    )
  }
}
