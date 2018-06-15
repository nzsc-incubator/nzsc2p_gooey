import Animation from './private/Animation';
import * as frameRenderers from '../frameRenderers/index';

const ownBoosterSelection = new Animation(({ setFrameId, _done, previouslyAvailableBoosters, ownBooster, }) => {
  let last = Date.now();
  let t = 0;
  const finishTime = 500;

  /*store.repaint = () => {
    renderers.ownBoosterSelection({
      previouslyAvailableBoosters,
      ownBooster,
      completionFactor: 1,
    });
  };*/

  const render = () => {
    const now = Date.now();
    t += now - last;
    last = now;

    frameRenderers.ownBoosterSelection({
      previouslyAvailableBoosters,
      ownBooster,
      completionFactor: t / finishTime,
    });

    setFrameId(requestAnimationFrame(render));
  };

  render();
});

export default ownBoosterSelection;
