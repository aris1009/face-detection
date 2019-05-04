import React, { Component } from 'react';
import Particles from 'react-particles-js';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageForm from './Components/ImageForm/ImageForm';
import FaceDetectSquare from './Components/FaceDetectSquare/FaceDetectSquare';
import './App.css';
import conf from './config.json';
import clarifai from 'clarifai';

const clarifaiClient = new clarifai.App({
  apiKey: conf.clarifai_api_key
});

const particleParams = {
  "particles": {
    "number": {
      "value": 40,
      density: {
        enable: true,
        value_area: 400
      }
    },
    "size": {
      "value": 2
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: ''
    }
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  onInputFocus = (e) => {
    e.target.select();
  }

  onButtonSubmit = () => {
    this.setState({ imgURL: this.state.input });

    clarifaiClient.models
      .predict(clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(
        function (response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function (err) {
          console.log(err);
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleParams} />
        <NavigationBar />
        <Logo />
        <Rank />
        <ImageForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
          onInputFocus={this.onInputFocus} />
        <FaceDetectSquare imgURL={this.state.imgURL} />
      </div>);
  }
}

export default App;
