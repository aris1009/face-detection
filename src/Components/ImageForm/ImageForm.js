import React, { Component } from 'react';
import Button from '../Button';

export default class ImageForm extends Component {
  render() {
    return (
      <div className="image-form">
        <input type="url" className="w-70" style={{height:"2.5em"}}/>
        <Button classNamesToChild="pa1 tc" style={{width: "max-content"}}>Upload</Button>
      </div>
    )
  }
}
