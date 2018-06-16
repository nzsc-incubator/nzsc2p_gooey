import Animation from './private/Animation';
import * as frameRenderers from '../frameRenderers/index';

const ownMoveSelection = new Animation(({ setFrameId, _done, previouslyAvailableMoves, ownMove, ownPoints, opponentPoints, }) => {
  let last = Date.now();
  let t = 0;
  const finishTime = 500;

  /*store.repaint = () => {
    renderers.ownMoveSelection({
      previouslyAvailableMoves,
      ownMove,
      completionFactor: 1,
    });
  };*/

  const render = () => {
    const now = Date.now();
    t += now - last;
    last = now;

    frameRenderers.ownMoveSelection({
      previouslyAvailableMoves,
      ownMove,
      ownPoints,
      opponentPoints,
      completionFactor: t / finishTime,
    });

    setFrameId(requestAnimationFrame(render));
  };

  render();
});

export default ownMoveSelection;
