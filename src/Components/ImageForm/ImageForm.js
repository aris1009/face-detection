import React, { Component } from 'react';
import Button from '../Button';

export default class ImageForm extends Component {
  render() {
    return (
      <div className="image-form">
        <input type="url" name="imageUrl" placeholder="Paste an image url"
          className="w-70 pl1" style={{ height: "2.5em" }}
          onChange={this.props.onInputChange}
          onFocus={this.props.onInputFocus} />
        <Button
          classNamesToChild="pa2 tc"
          onButtonClick={this.props.onButtonClick}
          functionality="action_clarifai">
          Upload
        </Button>
      </div>
    )
  }
}
