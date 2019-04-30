import React from 'react';
import Particles from 'react-particles-js';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Logo from './Components/Logo/Logo';
import ImageForm from './Components/ImageForm/ImageForm';
import './Components/Logo/Logo.css';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particleParams} />
      <NavigationBar />
      <Logo />
      {/* TODO <Rank /> */}
      <ImageForm />
      {/* <FaceDetectSquare/> */}
    </div>);
}

export default App;
