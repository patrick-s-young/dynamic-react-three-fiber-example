import React, { useRef } from "react";
import { useBox } from '@react-three/cannon';
import { useStore } from '../store';

export const ContainerWall = ({
  size,
  position,
  color,
  name
}) => {
  const removeBall = useStore(state => state.removeBall);

  const [ref] = useBox(() => ({
    args: size,
    position,
    // when ball collides with wall, remove it
    onCollide: (e) => { if (e.target.name === 'wall')  removeBall(e.body.name) }
  }))


  return (
    <mesh ref={ref} name={name}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color} transparent opacity={0.7} />
    </mesh>
  )
}