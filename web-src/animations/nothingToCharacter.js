import Animation from './private/Animation';
import * as frameRenderers from '../frameRenderers';

const nothingToCharacter = new Animation(({ setFrameId, done, }) => {
  let last = Date.now();
  let t = 0;
  const finishTime = 500;

  //const availableCharacters = JSON.parse(store.currentOutput.question()).availableCharacters;
  const availableCharacters = 'Ninja Zombie Samurai Clown'.split(' ');

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

    frameRenderers.nothingToCharacter({
      availableCharacters,
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

export default nothingToCharacter;
