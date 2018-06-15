import { NZSCTwoPlayerGameWebInterface } from './wasm/nzsc2p_gooey';
import { correctCanvasDimensions } from './canvas';
import * as animations from './animations/index';

window.addEventListener('resize', () => {
  correctCanvasDimensions();
  /*if (store.repaint) {
    store.repaint();
  }*/
});

animations.loading.start();
