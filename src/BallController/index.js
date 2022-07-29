import Ball from '../Ball';
import { useStore } from '../store';

export default function BallController () {
  const balls = useStore(state => state.balls);

  return (
    <group>
      {balls.map(props => <Ball  {...props}/> )}
    </group>
  )
}