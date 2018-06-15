import { ctx } from '../canvas';
import { BACKGROUND, OVERLAY } from './private/colors';
import { logoOfCharacter } from '../logos';
import images from '../images';
import getBackgroundColorOf from '../getBackgroundColorOf';
import { nthRect } from '../rect';
import { getPhase, getPhaseTime } from './private/phases';
import lerp from './private/lerp';

const ownCharacterSelection = ({
  previouslyAvailableCharacters,
  ownCharacter,
  completionFactor,
}) => {
  const PHASE_LENGTHS = [1, Infinity];

  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, 1800, 1000);

  const previouslyAvailableCharacterLogoMoves = previouslyAvailableCharacters.map(logoOfCharacter);

  const ownCharacterIndex = previouslyAvailableCharacters.findIndex(character => character === ownCharacter);

  for (let i = 0; i < previouslyAvailableCharacterLogoMoves.length; i++) {
    // Don't draw selected human character.
    if (i === ownCharacterIndex) {
      continue;
    }

    ctx.fillStyle = getBackgroundColorOf(previouslyAvailableCharacterLogoMoves[i]);

    const rect = nthRect(i);
    const [x, y, w, h] = rect;

    ctx.fillRect(x, y, w, h);

    ctx.drawImage(images[previouslyAvailableCharacterLogoMoves[i]], x, 300, 400, 400);
  }

  ctx.fillStyle = OVERLAY;
  ctx.fillRect(0, 0, 1800, 1000);

  const phase = getPhase(completionFactor, PHASE_LENGTHS);
  const phaseLength = PHASE_LENGTHS[phase];
  const phaseTime = getPhaseTime(completionFactor, PHASE_LENGTHS);

  switch (phase) {
    case 0: {
      // Draw human character
      const selectedHumanMoveStartRect = nthRect(ownCharacterIndex);
      const selectedHumanMoveEndRect = [200, 100, 600, 800];
      const selectedHumanMoveCurrentRect = selectedHumanMoveStartRect.map((n, i) => lerp(n, selectedHumanMoveEndRect[i], phaseTime / phaseLength));
      const [x, y, w, h] = selectedHumanMoveCurrentRect;

      const imageStartRect = [x, 300, 400, 400];
      const imageEndRect = [200, 200, 600, 600]; //< TODO
      const imageCurrentRect = imageStartRect.map((n, i) => lerp(n, imageEndRect[i], phaseTime / phaseLength));
      const [ix, iy, iw, ih] = imageCurrentRect;

      ctx.fillStyle = getBackgroundColorOf(previouslyAvailableCharacterLogoMoves[ownCharacterIndex]);
      ctx.fillRect(x, y, w, h);

      ctx.drawImage(images[previouslyAvailableCharacterLogoMoves[ownCharacterIndex]], ix, iy, iw, ih);

      break;
    }

    case 1: {
      // Draw own character
      {
        const selectedHumanMoveEndRect = [200, 100, 600, 800];
        const [x, y, w, h] = selectedHumanMoveEndRect;

        const imageEndRect = [200, 200, 600, 600]; //< TODO
        const [ix, iy, iw, ih] = imageEndRect;

        ctx.fillStyle = getBackgroundColorOf(previouslyAvailableCharacterLogoMoves[ownCharacterIndex]);
        ctx.fillRect(x, y, w, h);

        ctx.drawImage(images[previouslyAvailableCharacterLogoMoves[ownCharacterIndex]], ix, iy, iw, ih);
      }

      break;
    }
  }
};

export default ownCharacterSelection;
