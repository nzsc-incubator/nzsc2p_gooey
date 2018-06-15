import { clientToLocalCoords } from '../canvas';
import { getRectIndexAt } from '../rect';
import * as animations from '../animations/index';

const characterListener = (event, store, ownQuestion) => {
  const [x, y] = clientToLocalCoords(event.clientX, event.clientY);

  const rectIndex = getRectIndexAt(x, y);

  const availableCharacters = ownQuestion.available_characters;

  if (!(rectIndex in availableCharacters)) {
    return;
  }

  const selectedCharacter = availableCharacters[rectIndex];

  store.game.process_choice(store.aOrB, selectedCharacter);

  animations.ownCharacterSelection.start({
    previouslyAvailableCharacters: availableCharacters,
    ownCharacter: selectedCharacter,
  });
};

export default characterListener;
