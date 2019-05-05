import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <p className={`${this.props.classNamesToChild} mr1 dim ba pointer`}
        onClick={() => this.props.onButtonClick(this.props.functionality)}>
        {this.props.children}
      </p>
    )
  }
}
