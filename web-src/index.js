import { correctCanvasDimensions } from './canvas';
import new2PGame from './new2PGame';

window.addEventListener('resize', () => {
  correctCanvasDimensions();
  /*if (store.repaint) {
    store.repaint();
  }*/
});

new2PGame();
