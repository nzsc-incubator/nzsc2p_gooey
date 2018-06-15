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

  // TODO check for hacks

  if (prevPhase.phase === 'CHARACTER_CHOOSING') {
    animations.ownCharacterSelection.stop();
    if (phase.phase === 'BOOSTER_CHOOSING') {
      const whoGetsTheHeadstart = phase[store.aOrB.toLowerCase()].points === 1
        ? 'SELF'
        : phase[opponent.toLowerCase()].points === 1
          ? 'OPPONENT'
          : 'NEITHER';

      animations.characterToBooster.start({
        previouslyAvailableCharacters: 'Ninja Zombie Samurai Clown'.split(' ') /*TODO*/,
        availableBoosters: question[store.aOrB.toLowerCase()].available_boosters,
        ownCharacter: phase[store.aOrB.toLowerCase()].character,
        opponentCharacter: phase[opponent.toLowerCase()].character,
        whoGetsTheHeadstart,
      });
    } else {
      animations.characterToCharacter.start({
        previouslyAvailableCharacters: 'Ninja Zombie Samurai Clown'.split(' ') /*TODO itik*/,
        availableCharacters: question[store.aOrB.toLowerCase()].available_characters,
        bothCharacter: prevPhase[store.aOrB.toLowerCase()].selected_character,
      });
    }
  } else if (prevPhase.phase === 'BOOSTER_CHOOSING') {
    animations.ownBoosterSelection.stop();
    animations.boosterToMove.start({
      previouslyAvailableBoosters: store.beforeOwnChoiceQuestion[store.aOrB.toLowerCase()].available_boosters,
      availableMoves: question[store.aOrB.toLowerCase()].available_moves,
      ownBooster: phase[store.aOrB.toLowerCase()].booster,
      opponentBooster: phase[opponent.toLowerCase()].booster,
      ownPoints: phase[store.aOrB.toLowerCase()].points,
      opponentPoints: phase[opponent.toLowerCase()].points,
    });
  } else {
    alert('TODO ' + prevPhase.phase);
  }
};

export default createTurnEndListener;
