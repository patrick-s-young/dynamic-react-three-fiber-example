// React
import React, { useState, useEffect } from "react";
// React Three
import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from '@react-three/cannon';
import { OrbitControls } from '@react-three/drei';
// components
import { Container } from './Container'; 
import BallController from './BallController';
// Styles
import "./styles.css";




export default function App() {
  const [ counter, setCounter ] = useState(0);

  const onAddBall = (e) => {
    console.log('add ball')
    setCounter(counter + 1);
  }

  const onRemoveBall = (e) => {
    console.log('remove ball')
    setCounter(counter - 1);
  }

  useEffect(() => {
    const interval = setInterval(() => setCounter(counter => counter + 1), 1000);
    return () => clearInterval(interval);
  },[]);

  return (
    <div className="App">
      <Canvas
            camera={{ fov: 75, position: [0, 5.5, 7.75] }}>
        <OrbitControls />
        <Physics
          defaultContactMaterial={{ friction: 0.7, restitution: 0.4 }}
        >
          <Debug scale={1} color='green'>
            <BallController counter={counter} />
            <Container onAddBall={onAddBall} onRemoveBall={onRemoveBall} /> 
          </Debug>
        </Physics>

        <hemisphereLight args={[0x606060, 0x404040]} />
        <directionalLight position={[1, 1, 1]}/>
      </Canvas>
    </div>
  );
}