// container wall component
import { ContainerWall } from "../ContainerWall";
// container configs
const container = [
  { size: [12, .25, 12], position: [0, 0, 0], color: 0xbb00bb, key: 'C01', name: 'floor'}, // bottom
  { size: [12, 2, .25], position: [0, 1, -6], color: 0x590055, key: 'C02', name: 'wall'}, // back wall
  { size: [.25, 2, 12], position: [6, 1, 0], color: 0xffff00, key: 'C03',  name: 'wall'}, // right wall
  { size: [12, 2, .25], position: [0, 1, 6], color: 0xaa0000, key: 'C04', name: 'wall'}, // front wall,
  { size: [.25, 2, 12], position: [-6, 1, 0], color: 0x00aaaa, key: 'C05', name: 'wall'}, // left wall
];

export const Container = () => {
  return (
    <group>
      {container.map(props => <ContainerWall {...props}/> )}
    </group>
  )
}