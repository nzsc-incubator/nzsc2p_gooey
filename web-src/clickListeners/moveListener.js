import { clientToLocalCoords } from '../canvas';
import { getCircleIndexAt } from '../circle';
import * as animations from '../animations/index';
import clownkit from '../clownkit';

const moveListener = (event, store, ownQuestion) => {
  const [x, y] = clientToLocalCoords(event.clientX, event.clientY);

  const circleIndex = getCircleIndexAt(x, y);

  const availableMoves = ownQuestion.available_moves;

  if (!(circleIndex in availableMoves)) {
    return;
  }

  const selectedMove = availableMoves[circleIndex];

  store.beforeOwnChoicePhase = JSON.parse(store.game.get_phase());
  store.beforeOwnChoiceQuestion = JSON.parse(store.game.get_question());

  store.game.process_choice(store.aOrB, selectedMove);
  clownkit.deposit(store.roomName, store.aOrB, selectedMove);

  const phase = JSON.parse(store.game.get_phase());

  const opponent = store.aOrB === 'A'
    ? 'B'
    : 'A';

  animations.ownMoveSelection.start({
    previouslyAvailableMoves: availableMoves,
    ownMove: selectedMove,
    ownPoints: phase[store.aOrB.toLowerCase()].points,
    opponentPoints: phase[opponent.toLowerCase()].points,
  });
};

export default moveListener;
