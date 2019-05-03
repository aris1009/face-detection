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
    }
  }

  onInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  onButtonSubmit = () => {
    clarifaiClient.models
      .predict("https://samples.clarifai.com/face-det.jpg")
      .then(
        function (response) {
          console.log(response);
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
          onButtonSubmit={this.onButtonSubmit} />
        <FaceDetectSquare />
      </div>);
  }
}

export default App;
