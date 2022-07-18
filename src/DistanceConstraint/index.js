import React, { useRef } from "react";
import { useBox, useSphere, useCylinder, useDistanceConstraint } from '@react-three/cannon';
import { useFrame } from "@react-three/fiber";

export default function DistanceConstraint() {
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

  const [pivotRef] = useSphere(() => ({
    args: [.25],
    position: [0, .125, 0],
    mass: 0
  }), useRef(null));

  const [sphereRef, sphereApi] = useSphere(() => ({
    args: [.5],
    position: [0, .5, 2.25],
    mass: 1
  }), useRef(null));

  useDistanceConstraint(pivotRef, sphereRef, { distance: 4.75 });

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