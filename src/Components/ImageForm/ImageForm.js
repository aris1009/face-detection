import React, { Component } from 'react';
import Button from '../Button';

export default class ImageForm extends Component {
  render() {
    return (
      <div className="image-form w-40 tc">
        <input type="url" className="w-75" style={{height:"2.5em"}}/>
        <Button classNamesToChild="w-20 pa1 dim bb pointer">Upload</Button>
      </div>
    )
  }
}
