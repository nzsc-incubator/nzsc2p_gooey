import Animation from './private/Animation';
import * as frameRenderers from '../frameRenderers';

const WIFI_PERIOD = 1500;

const waitingForNetwork = new Animation(({ setFrameId, }) => {
  let then = Date.now();
  let time = 0;

  const render = () => {
    const now = Date.now();
    time += now - then;
    then = now;

    const completionFactor = (time % WIFI_PERIOD) / WIFI_PERIOD;
    
    frameRenderers.waitingForNetwork({
      completionFactor,
    });

    setFrameId(requestAnimationFrame(render));
  };

  render();
});

export default waitingForNetwork;
