import React from 'react';
import Particles from 'react-particles-js';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageForm from './Components/ImageForm/ImageForm';
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
      <Rank />
      <ImageForm />
      {/* <FaceDetectSquare/> */}
    </div>);
}

export default App;
