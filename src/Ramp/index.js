// animation hook
import { useFrame } from '@react-three/fiber';
// physics body
import { useBox } from '@react-three/cannon';

export const Ramp = ({
  size,
  position,
  color
}) => {
  const [ref, api] = useBox(() => ({
    args: size,
    position
  }));

  useFrame(({ clock }) => {
    const rotation = Math.sin(clock.getElapsedTime());
    api.rotation.set(rotation * 4, rotation * 3, rotation * 1);
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={size}/>
      <meshStandardMaterial color={color}  />
    </mesh>
  )
}