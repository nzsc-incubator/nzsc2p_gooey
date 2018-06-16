import Animation from './private/Animation';
import * as frameRenderers from '../frameRenderers/index';

const ownCharacterSelection = new Animation(({ setFrameId, previouslyAvailableCharacters, ownCharacter, }) => {
  let last = Date.now();
  let t = 0;
  const finishTime = 500;

  /*store.repaint = () => {
    renderers.ownCharacterSelection({
      previouslyAvailableCharacters,
      ownCharacter,
      completionFactor: 1,
    });
  };*/

  const render = () => {
    const now = Date.now();
    t += now - last;
    last = now;

    frameRenderers.ownCharacterSelection({
      previouslyAvailableCharacters,
      ownCharacter,
      completionFactor: t / finishTime,
    });

    setFrameId(requestAnimationFrame(render));
  };

  render();
});

export default ownCharacterSelection;
