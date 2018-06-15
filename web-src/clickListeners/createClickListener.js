const createClickListener = (store) => (event) => {
  if (store.aOrB === null) {
    return;
  }

  const questions = JSON.parse(store.game.get_question());
  const ownQuestion = store.aOrB === 'A'
    ? questions.a
    : questions.b;

  switch (ownQuestion.question) {
    case 'CHOOSE_BOOSTER':
      //
      break;
    case 'CHOOSE_BOOSTER':
      //
      break;
    case 'CHOOSE_MOVE':
      //
      break;
    case 'NONE':
      break;
    default:
      throw new TypeError('Unexpected question type: ' + ownQuestion);
  }
};

export default createClickListener;
