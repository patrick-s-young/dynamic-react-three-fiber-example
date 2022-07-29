import create from 'zustand';

export const useStore = create((set) => ({
  balls: [],
  ballIndex: 0,
  addBall: () => {
    set((state) => ({ ballIndex: state.ballIndex + 1 }));
    set((state) => ({ balls: [...state.balls, {radius: [.25], dropFromHeight: 4, name: state.ballIndex, key: state.ballIndex}]}))
  },
  removeBall: (ballIndex) => {
    set((state) => ({ balls: [...state.balls.filter(item => item.key !== ballIndex)]}))
  }
}))
