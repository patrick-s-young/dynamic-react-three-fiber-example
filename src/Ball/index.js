// react
import { useRef } from "react";
// physics body
import { useSphere } from '@react-three/cannon';

export default function Ball({
  radius,
  dropFromHeight,
  name
}) {
  const [ref] = useSphere(() => ({
    args: radius,
    position: [ -.01 + Math.random() * .02, dropFromHeight, -.01 + Math.random() * .02 ],
    mass: 1
  }), useRef(null));

  return (
  <mesh ref={ref} name={name}>
    <sphereGeometry args={radius}/>
    <meshStandardMaterial color={0x00ff55} transparent opacity={0.7} />
  </mesh>
  )
}