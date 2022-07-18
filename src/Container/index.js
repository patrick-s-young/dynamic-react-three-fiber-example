import React from "react";
import { ContainerWall } from "../ContainerWall";

export const Container = ({
  onAddBall,
  onRemoveBall
}) => {

  const container = [
    { size: [12, .25, 12], position: [0, 0, 0], color: 0xbb00bb, callBack: () => {}, key: 'C01'}, // bottom
    { size: [12, 2, .25], position: [0, 1, -6], color: 0x00aa00, callBack: () => {}, key: 'C02' }, // back wall
    { size: [.25, 2, 12], position: [6, 1, 0], color: 0x0000aa, callBack: onAddBall, key: 'C03' }, // right wall
    { size: [12, 2, .25], position: [0, 1, 6], color: 0xaa0000, callBack: () => {}, key: 'C04' }, // front wall,
    { size: [.25, 2, 12], position: [-6, 1, 0], color: 0x00aaaa, callBack: onRemoveBall, key: 'C05'}, // left wall
  ];

  return (
    <group>
      {container.map(props => <ContainerWall {...props}/> )}
    </group>
  )
}