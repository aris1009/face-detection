import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <p className={this.props.classNamesToChild}>
        {this.props.children}
      </p>
    )
  }
}
