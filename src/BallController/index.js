// zustand
import { useStore } from '../store';
// ball component
import Ball from '../Ball';

export const BallController = () => {
  const balls = useStore(state => state.balls);

  return (
    <group>
      {balls.map(props => <Ball  {...props}/> )}
    </group>
  )
}