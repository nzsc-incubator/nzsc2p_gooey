import characterListener from './characterListener';

const createClickListener = (store) => (event) => {
  if (store.aOrB === null) {
    return;
  }

  const questions = JSON.parse(store.game.get_question());
  const ownQuestion = store.aOrB === 'A'
    ? questions.a
    : questions.b;

  switch (ownQuestion.question) {
    case 'CHOOSE_CHARACTER':
      characterListener(event, store, ownQuestion);
      break;
    case 'CHOOSE_BOOSTER':
      alert('TODO Booster');
      break;
    case 'CHOOSE_MOVE':
      alert('TODO Move');
      break;
    case null:
      break;
    default:
      console.log(ownQuestion);
      throw new TypeError('Unexpected question type: ' + ownQuestion);
  }
};

export default createClickListener;
