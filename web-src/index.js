import { canvas, correctCanvasDimensions } from './canvas';
import * as animations from './animations/index';
import clownkit from './clownkit';
import createClickListener from './clickListeners/createClickListener';
import newGame from './newGame';

window.addEventListener('resize', () => {
  correctCanvasDimensions();
  /*if (store.repaint) {
    store.repaint();
  }*/
});

if (window.navigator.onLine) {
  (async () => {
    animations.loading.start();

    await clownkit.login();

    const store = {
      game: null,
      roomName: null,
      aOrB: null,
    };

    canvas.addEventListener('click', createClickListener(store));

    newGame(store);
  })();
} else {
  animations.waitingForNetwork.start();
  window.addEventListener('online', () => {
    window.location.reload();
  });
}

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}
