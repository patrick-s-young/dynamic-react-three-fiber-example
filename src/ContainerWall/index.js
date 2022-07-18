import React, { useRef } from "react";
import { useBox } from '@react-three/cannon';

export const ContainerWall = ({
  size,
  position,
  color,
  callBack
}) => {
  const [ref] = useBox(() => ({
    args: size,
    position
  }), useRef(null));

  return (
    <mesh ref={ref} onClick={callBack}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  )
}