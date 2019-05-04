import React, { Component } from 'react';
import Button from '../Button';

export default class ImageForm extends Component {
  render() {
    return (
      <div className="image-form">
        <input type="url" name="imageUrl" placeholder="Paste an image url"
          className="w-70" style={{ height: "2.5em" }}
          onChange={this.props.onInputChange}
          onFocus={this.props.onInputFocus} />
        <Button
          classNamesToChild="pa1 tc"
          style={{ width: "max-content" }}
          onButtonSubmit={this.props.onButtonSubmit}>
          Upload
        </Button>
      </div>
    )
  }
}
