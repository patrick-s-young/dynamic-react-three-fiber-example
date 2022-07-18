import React, { useRef } from "react";
import { useSphere } from '@react-three/cannon';

export default function Ball({
  radius,
  dropFromHeight
}) {
  const [ref] = useSphere(() => ({
    args: radius,
    position: [ -.01 + Math.random() * .02, dropFromHeight, -.01 + Math.random() * .02 ],
    mass: 1
  }), useRef(null));

  return (
  <mesh ref={ref} >
    <sphereGeometry args={radius}/>
    <meshStandardMaterial color='red' transparent opacity={0.7} />
  </mesh>
  )
}