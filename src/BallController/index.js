import React, { useState, useEffect } from "react";
import Ball from '../Ball';


export default function BallController ({
  counter
}) {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    if (counter > balls.length) {
      setBalls([...balls, {radius: [.25], dropFromHeight: 4, key: counter}]);
    } else {
      setBalls(balls.slice(0, -1));
    }
  }, [counter]);
console.log('balls', balls)
  return (
    <group>
      {balls.map(props => <Ball  {...props}/> )}
    </group>
  )
}