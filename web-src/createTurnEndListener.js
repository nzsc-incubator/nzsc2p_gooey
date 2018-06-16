import clownkit from './clownkit';
import * as animations from './animations/index';

const createTurnEndListener = (store) => async (aPayload, bPayload) => {
  await clownkit.acceptResults(store.roomName, store.aOrB);

  const prevPhase = JSON.parse(store.game.get_phase());

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
        previouslyAvailableCharacters: store.beforeOwnChoiceQuestion[store.aOrB.toLowerCase()].available_characters,
        availableBoosters: question[store.aOrB.toLowerCase()].available_boosters,
        ownCharacter: phase[store.aOrB.toLowerCase()].character,
        opponentCharacter: phase[opponent.toLowerCase()].character,
        whoGetsTheHeadstart,
      });
    } else {
      animations.characterToCharacter.start({
        previouslyAvailableCharacters: store.beforeOwnChoiceQuestion[store.aOrB.toLowerCase()].available_characters,
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
  } else if (prevPhase.phase === 'MOVE_CHOOSING') {
    const ownPointDiff = phase[store.aOrB.toLowerCase()].points - prevPhase[store.aOrB.toLowerCase()].points;
    const opponentPointDiff = phase[opponent.toLowerCase()].points - prevPhase[opponent.toLowerCase()].points;
    const whoGetsThePoint = ownPointDiff === 1
      ? opponentPointDiff === 1
        ? 'BOTH'
        : 'SELF'
      : opponentPointDiff === 1
        ? 'OPPONENT'
        : 'NEITHER';

    animations.ownMoveSelection.stop();

    if (
      phase[store.aOrB.toLowerCase()].points < 5
      && phase[opponent.toLowerCase()].points < 5
    ) {
      animations.moveClash.start({
        previouslyAvailableMoves: store.beforeOwnChoiceQuestion[store.aOrB.toLowerCase()].available_moves,
        availableMoves: question[store.aOrB.toLowerCase()].available_moves,
        ownMove: prevPhase[store.aOrB.toLowerCase()].selected_move,
        opponentMove: opponentPayload,
        whoGetsThePoint,
        ownPoints: phase[store.aOrB.toLowerCase()].points,
        opponentPoints: phase[opponent.toLowerCase()].points,
      });
    } else {
      animations.finalMoveClash.start({
        previouslyAvailableMoves: store.beforeOwnChoiceQuestion[store.aOrB.toLowerCase()].available_moves,
        ownMove: prevPhase[store.aOrB.toLowerCase()].selected_move,
        opponentMove: opponentPayload,
        whoGetsThePoint,
        ownPoints: phase[store.aOrB.toLowerCase()],
        opponentPoints: phase[opponent.toLowerCase()],
      });
    }
  } else {
    alert('TODO ' + prevPhase.phase);
  }
};

export default createTurnEndListener;
