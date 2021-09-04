import logo from './logo.svg';
import './App.css';
import Webcam from 'react-webcam';
import * as handpose from "@tensorflow-models/handpose";
import * as tf from "@tensorflow/tfjs";
import React, {useRef} from 'react';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () =>{
  const net = await handpose.load()
  console.log('its loaded');
}
 runHandpose();
 
  return (
    <div className="App">
      <header className="App-header">
        <Webcam ref={webcamRef}
        style={{
          position:"absolute",
          marginLeft:"auto",
          marginRight:"auto"
        }} />
        <canvas
        ref={canvasRef}
        style={{
          position:"absolute",
          marginRight:"auto",
          marginLeft:"auto"
        }} />

      </header>
    </div>
  );
}

export default App;
