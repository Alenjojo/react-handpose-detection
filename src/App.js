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
  setInterval(() =>{
    detect(net)
  },1000)
};

const detect = async(net) =>{
  if(typeof webcamRef.current !== "undefined" &&
  webcamRef.current !== null &&
  webcamRef.current.video.readyState === 4){

  const video = webcamRef.current.video;
  const videoWidth = webcamRef.current.video.videoWidth;
  const videoHeight = webcamRef.current.videoHeight;
  
  webcamRef.current.video.width = videoWidth;
  webcamRef.current.video.height = videoHeight;

  canvasRef.current.width = videoWidth;
  canvasRef.current.height = videoHeight;

  const hand = await net.estimateHands(video);
  console.log(hand);
  }
};
 runHandpose();

  return (
    <div className="App">
      <header className="App-header">
      <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

      </header>
    </div>
  );
}

export default App;
