import { clientToLocalCoords } from '../canvas';
import { getRectIndexAt } from '../rect';
import * as animations from '../animations/index';
import clownkit from '../clownkit';

const boosterListener = (event, store, ownQuestion) => {
  const [x, y] = clientToLocalCoords(event.clientX, event.clientY);

  const rectIndex = getRectIndexAt(x, y);

  const availableBoosters = ownQuestion.available_boosters;

  if (!(rectIndex in availableBoosters)) {
    return;
  }

  const selectedBooster = availableBoosters[rectIndex];

  store.game.process_choice(store.aOrB, selectedBooster);
  clownkit.deposit(store.roomName, store.aOrB, selectedBooster);

  animations.ownBoosterSelection.start({
    previouslyAvailableBoosters: availableBoosters,
    ownBooster: selectedBooster,
  });
};

export default boosterListener;
