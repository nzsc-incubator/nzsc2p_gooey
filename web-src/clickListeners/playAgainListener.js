import { clientToLocalCoords } from '../canvas';
import { isPlayButtonClicked } from '../buttons';
import * as animations from '../animations/index';
import newGame from '../newGame';

const playAgainListener = (event, store) => {
  const [x, y] = clientToLocalCoords(event.clientX, event.clientY);

  if (!isPlayButtonClicked(x, y)) {
    return;
  }

  animations.finalMoveClash.stop();
  animations.loading.start();

  newGame(store);
};

export default playAgainListener;
