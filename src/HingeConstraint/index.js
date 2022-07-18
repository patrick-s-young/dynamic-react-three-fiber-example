import React, { useRef } from "react";
import { useBox, useSphere, useCylinder, useHingeConstraint } from '@react-three/cannon';
import { useFrame } from "@react-three/fiber";

export default function HingeConstraint() {
  const radiusTop = 5;
  const radiusButtom = 5;
  const height = 1;
  const numSegements = 24;


  const [floorRef, floorApi] = useCylinder(() => ({
    args: [radiusTop, radiusButtom, height, numSegements ],
    angularVelocity: [0, -0.75, 0],
    position: [0, -.5, 0],
    mass: 0
  }), useRef(null));

  const [pivotRef] = useBox(() => ({
    args: [.25, .25, .25],
    position: [0, .125, 0],
    mass: 0
  }), useRef(null));

  const [sphereRef, sphereApi] = useSphere(() => ({
    args: [.5],
    position: [0, 1, 2.25],
    mass: 1
  }), useRef(null));

  useHingeConstraint(pivotRef, sphereRef, { 
    axisA: [1, 0, 0],
    axisB: [1, 0, 0],
    pivotA: [0, 0, 0],
    pivotB: [0, .5, -2.25]
   });

  useFrame(({ clock }) => floorApi.rotation.set(0, clock.getElapsedTime() * -0.75, 0));

  //const onSphereClick = (ev) => sphereApi.velocity.set(0, 5, 0);
  const onSphereClick = (ev) => sphereApi.applyImpulse([0, 5, 0], [-.2, 0, 0]);
  
  return (
    <group>
      <mesh ref={sphereRef} postion={[0, .5, 2.25]} onClick={onSphereClick} receiveShadow>
        <sphereGeometry args={[.5]} />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={floorRef} postion={[0, -.5, 0]} receiveShadow>
        <cylinderGeometry args={[radiusTop, radiusButtom, height, numSegements * 2]} />
      </mesh>
    </group>
  )
}