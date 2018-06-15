import Animation from './private/Animation';
import * as frameRenderers from '../frameRenderers';

const characterToBooster = new Animation(({
  setFrameId,
  done,

  previouslyAvailableCharacters,
  availableBoosters,
  ownCharacter,
  opponentCharacter,
  whoGetsTheHeadstart,
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

    frameRenderers.characterToBooster({
      previouslyAvailableCharacters,
      availableBoosters,
      ownCharacter,
      opponentCharacter,
      whoGetsTheHeadstart,
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

export default characterToBooster;
