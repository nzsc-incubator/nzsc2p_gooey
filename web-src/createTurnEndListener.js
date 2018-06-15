import clownkit from './clownkit';
import * as animations from './animations/index';

const createTurnEndListener = (store) => async (aPayload, bPayload) => {
  await clownkit.acceptResults(store.roomName, store.aOrB);

  const prevPhase = JSON.parse(store.game.get_phase());
  const prevQuestion = JSON.parse(store.game.get_question());

  const opponent = store.aOrB === 'A'
    ? 'B'
    : 'A';
  const opponentPayload = opponent === 'A'
    ? aPayload
    : bPayload;
  store.game.process_choice(opponent, opponentPayload);

  const phase = JSON.parse(store.game.get_phase());
  const question = JSON.parse(store.game.get_question());

  const whoGetsTheHeadstart = phase[store.aOrB.toLowerCase()].points === 1
    ? 'SELF'
    : phase[opponent.toLowerCase()].points === 1
      ? 'OPPONENT'
      : 'NEITHER';

  // TODO check for hacks

  if (prevPhase.phase === 'CHARACTER_CHOOSING') {
    if (phase.phase === 'BOOSTER_CHOOSING') {
      animations.ownCharacterSelection.stop();
      animations.characterToBooster.start({
        previouslyAvailableCharacters: 'Ninja Zombie Samurai Clown'.split(' ') /*TODO*/,
        availableBoosters: question[store.aOrB.toLowerCase()].available_boosters,
        ownCharacter: phase[store.aOrB.toLowerCase()].character,
        opponentCharacter: phase[opponent.toLowerCase()].character,
        whoGetsTheHeadstart,
      });
    } else {
      alert('TODO repick');
    }
  } else {
    alert('TODO ' + prevPhase.phase);
  }
};

export default createTurnEndListener;
