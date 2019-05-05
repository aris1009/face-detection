import React, { Component } from 'react';
import Particles from 'react-particles-js';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Signin from './Components/Route/Signin';
import Register from './Components/Route/Register';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: '',
      boundingBoxRegions: [],
      route: 'signin',
      isSignedIn: false
    }
  }


  onInputChange = e => {
    this.setState({ input: e.target.value });
  }

  onInputFocus = e => {
    e.target.select();
  }

  onButtonClick = (data) => {
    switch (data) {
      case String(data.match(/action_.*/)):
        if (data === 'action_clarifai') {
          this.setState({ imgURL: this.state.input });

          clarifaiClient.models
            .predict(clarifai.FACE_DETECT_MODEL, this.state.input)
            .then(response => this.boundBoxCoordsCalculator(response))
            .catch(err => console.log(err));
        }
        break;
      case String(data.match(/route_.*/)):
        let route = data.replace('route_', '');
        if (route === 'home') this.setState({ isSignedIn: true });
        if (route === 'signin') this.setState({ isSignedIn: false });
        this.setState({ route });
        break;
      default:
        break;

    }
  }

  boundBoxCoordsCalculator = data => {
    let regions = data.outputs[0].data.regions;
    this.setState({ boundingBoxRegions: regions });
  }

  render() {
    const { imgURL, boundingBoxRegions, route, isSignedIn } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={conf.particlesParams} />
        <NavigationBar onButtonClick={this.onButtonClick} isSignedIn={isSignedIn} />
        <Logo />
        {
          (() => {
            switch (route) {
              case 'home':
                return (<>
                  <Rank />
                  <ImageForm
                    onInputChange={this.onInputChange}
                    onButtonClick={this.onButtonClick}
                    onInputFocus={this.onInputFocus} />
                  <FaceDetectSquare
                    imgURL={imgURL}
                    boundingBoxRegions={boundingBoxRegions} />
                </>)
              case 'signin':
                return <Signin onButtonClick={this.onButtonClick} />
              case 'register':
                return <Register onButtonClick={this.onButtonClick} />
              default:
                return null;
            }
          })()
        }
      </div>);
  }
}

export default App;
