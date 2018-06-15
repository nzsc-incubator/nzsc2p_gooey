import Animation from './private/Animation';
import * as frameRenderers from '../frameRenderers';

const TAU = 2 * Math.PI;
const SPIN_SPEED = 0.01;

const loading = new Animation(({ setFrameId, }) => {
  let then = Date.now();
  let time = 0;

  const render = () => {
    const now = Date.now();
    time += now - then;
    then = now;

    const theta = (time * SPIN_SPEED) % TAU;
    const completionFactor = theta / TAU;

    frameRenderers.loading({
      completionFactor,
    });

    setFrameId(requestAnimationFrame(render));
  };

  render();
});

export default loading;
