import React, { useRef, useState, useEffect } from "react";
import { useCylinder, useCompoundBody } from '@react-three/cannon';
import { useFrame } from "@react-three/fiber";

const radiusTop = 5;
const radiusButtom = 5;
const height = 1;
const numSegements = 24;
const cyl = {
  args: [radiusTop, radiusButtom, height, numSegements ],
  mass: 0,
  position: [0, -.5, 0],
  type: 'Cylinder'
}
const boxSize = .16;
const box = {
  args: [boxSize, boxSize, boxSize],
  mass: 0,
  position: [0, boxSize * .5, radiusTop - boxSize * .5],
  type: 'Box',
  name: 'bob'
}

export default function CompoundBody() {
  const [shapes, setShapes] = useState(
    [       
      { args: cyl.args, position: cyl.position, type: cyl.type },
      { args: box.args, position: box.position, type: box.type, name: box.name }
    ]
  );



  
   const [ref, api] = useCompoundBody(
    () => ({
      mass: 0,
      angularVelocity: [0, -.25, 0],
      shapes
    }),
    useRef(null),
  )

   useFrame(({ clock }) => api.rotation.set(0, clock.getElapsedTime() * -.25, 0));

   const onClickCompoundBody = (ev) => {
     const { name } = ev.object;
      console.log('compound body name', name);
      const clickShape = ref.current.children.filter(item => item.name === name);
      console.log('clickShape:', clickShape[0]);
      console.log('ref.current ', ref.current)
   }

   useEffect(() => {

   }, [shapes]);

  return (
    <group ref={ref} onClick={onClickCompoundBody}>
      <mesh castShadow receiveShadow  position={cyl.position} >
        <cylinderGeometry args={[radiusTop, radiusButtom, height, numSegements * 2]}/>
        <meshStandardMaterial color="orange" transparent opacity={0.95} />
      </mesh>
      <mesh castShadow position={box.position} name={box.name} >
        <boxGeometry args={box.args} />
        <meshNormalMaterial />
      </mesh>
    </group>
  );
}