// react
import { useEffect } from "react";
// react-three
import { Canvas } from "@react-three/fiber";
// physics
import { Physics, Debug } from '@react-three/cannon';
// navigation
import { OrbitControls } from '@react-three/drei';
// rendered elements
import { Container } from './Container'; 
import { BallController } from './BallController';
import { Ramp } from './Ramp';
// zustand state management
import { useStore } from './store';
// styles
import "./styles.css";

export default function App() {
  const addBall = useStore(state => state.addBall);

  useEffect(() => {
    // add a new ball every second
    const interval = setInterval(() => addBall(), 1000);
    return () => clearInterval(interval);
  },[]);

  return (
    <div className="App">
      <Canvas camera={{ fov: 75, position: [0, 5.5, 7.75] }}>
        <OrbitControls />
        <Physics defaultContactMaterial={{ friction: 0.7, restitution: 0.4 }}>
          <Debug scale={1} color='green'>
            <BallController />
            <Ramp
              size={[2, 2, 2]}
              position={[0, 0, 0]}
              color={0xffaaff}
            />
            <Container/> 
          </Debug>
        </Physics>
        <hemisphereLight args={[0x606060, 0x404040]} />
        <directionalLight position={[1, 1, 1]}/>
      </Canvas>
    </div>
  );
}