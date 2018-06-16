import Animation from './private/Animation';
import * as frameRenderers from '../frameRenderers';

const moveClash = new Animation(({
  setFrameId,
  done,

  previouslyAvailableMoves,
  availableMoves,
  ownMove,
  opponentMove,
  whoGetsThePoint,
  ownPoints,
  opponentPoints,
}) => {
  let last = Date.now();
  let t = 0;
  const finishTime = 2000;

  // store.repaint = () => {
  //   renderers.nothingToCharacter({
  //     availableCharacters,
  //     completionFactor: 1,
  //   });
  // };

  const render = () => {
    const now = Date.now();
    t += now - last;
    last = now;

    if (t > finishTime) {
      t = finishTime;
    }

    frameRenderers.moveClash({
      previouslyAvailableMoves,
      availableMoves,
      ownMove,
      opponentMove,
      whoGetsThePoint,
      ownPoints,
      opponentPoints,
      completionFactor: t / finishTime,
    });

    if (t < finishTime) {
      setFrameId(requestAnimationFrame(render));
    } else {
      done();
    }
  };

  render();
});

export default moveClash;
