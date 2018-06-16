import characterListener from './characterListener';
import boosterListener from './boosterListener';
import moveListener from './moveListener';
import playAgainListener from './playAgainListener';

const createClickListener = (store) => (event) => {
  if (store.aOrB === null) {
    return;
  }

  const phase = JSON.parse(store.game.get_phase());
  const questions = JSON.parse(store.game.get_question());
  const ownQuestion = store.aOrB === 'A'
    ? questions.a
    : questions.b;

  switch (ownQuestion.question) {
    case 'CHOOSE_CHARACTER':
      characterListener(event, store, ownQuestion);
      break;
    case 'CHOOSE_BOOSTER':
      boosterListener(event, store, ownQuestion);
      break;
    case 'CHOOSE_MOVE':
      moveListener(event, store, ownQuestion);
      break;
    case null:
      if (phase.phase === 'GAME_OVER') {
        playAgainListener(event, store, ownQuestion);
      }
      break;
    default:
      console.log(ownQuestion);
      throw new TypeError('Unexpected question type: ' + ownQuestion);
  }
};

export default createClickListener;
