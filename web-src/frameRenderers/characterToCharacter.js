import { ctx } from '../canvas';
import { BACKGROUND, OVERLAY } from './private/colors';
import { logoOfCharacter } from '../logos';
import images from '../images';
import getBackgroundColorOf from '../getBackgroundColorOf';
import { nthRect } from '../rect';
import { getPhase, getPhaseTime } from './private/phases';
import lerp from './private/lerp';

const characterToCharacter = ({
  previouslyAvailableCharacters,
  availableCharacters,
  bothCharacter,
  completionFactor,
}) => {
  const PHASE_LENGTHS = [0.176, 0.648, 0.176];

  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, 1800, 1000);

  const previouslyAvailableCharacterLogoMoves = previouslyAvailableCharacters.map(logoOfCharacter);
  const availableCharacterLogoMoves = availableCharacters.map(logoOfCharacter);

  const bothCharacterIndex = previouslyAvailableCharacters.findIndex(character => character === bothCharacter);

  if (completionFactor !== 1) {
    for (let i = 0; i < previouslyAvailableCharacterLogoMoves.length; i++) {
      // Don't draw selected human character.
      if (i === bothCharacterIndex) {
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
  } else {
    for (let i = 0; i < availableCharacterLogoMoves.length; i++) {
      ctx.fillStyle = getBackgroundColorOf(availableCharacterLogoMoves[i]);

      const [x, y, w, h] = nthRect(i);

      ctx.fillRect(x, y, w, h);

      ctx.drawImage(images[availableCharacterLogoMoves[i]], x, 300, 400, 400);
    }

    /* TODO: find a way to draw scores without blocking boosters
    ctx.fillStyle = SCORE_COLOR;

    if (whoGetsTheHeadstart === 'HUMAN') {
      ctx.fillRect(100, 850, 20, 100);
    }
    if (whoGetsTheHeadstart === 'COMPUTER') {
      ctx.fillRect(1700, 850, 20, 100);
    }
    */
  }

  const phase = getPhase(completionFactor, PHASE_LENGTHS);
  const phaseLength = PHASE_LENGTHS[phase];
  const phaseTime = getPhaseTime(completionFactor, PHASE_LENGTHS);

  switch (phase) {
    case 0: {
      // Draw human character
      {
        const selectedHumanMoveEndRect = [200, 100, 600, 800];
        const [x, y, w, h] = selectedHumanMoveEndRect;

        const imageEndRect = [200, 200, 600, 600]; //< TODO
        const [ix, iy, iw, ih] = imageEndRect;

        ctx.fillStyle = getBackgroundColorOf(previouslyAvailableCharacterLogoMoves[bothCharacterIndex]);
        ctx.fillRect(x, y, w, h);

        ctx.drawImage(images[previouslyAvailableCharacterLogoMoves[bothCharacterIndex]], ix, iy, iw, ih);
      }

      // Draw computer character
      const selectedComputerMoveStartRect = [1800, 100, 600, 800];
      const selectedComputerMoveEndRect = [1000, 100, 600, 800];
      const selectedComputerMoveCurrentRect = selectedComputerMoveStartRect.map((n, i) => lerp(n, selectedComputerMoveEndRect[i], phaseTime / phaseLength));
      const [x, y, w, h] = selectedComputerMoveCurrentRect;

      const imageStartRect = [1800, 200, 600, 600]; //< TODO
      const imageEndRect = [1000, 200, 600, 600]; //< TODO
      const imageCurrentRect = imageStartRect.map((n, i) => lerp(n, imageEndRect[i], phaseTime / phaseLength));
      const [ix, iy, iw, ih] = imageCurrentRect;

      ctx.fillStyle = getBackgroundColorOf(logoOfCharacter(bothCharacter));
      ctx.fillRect(x, y, w, h);

      ctx.drawImage(images[logoOfCharacter(bothCharacter)], ix, iy, iw, ih);

      break;
    }

    case 1: {
      // Draw own character
      {
        const selectedHumanMoveEndRect = [200, 100, 600, 800];
        const [x, y, w, h] = selectedHumanMoveEndRect;

        const imageEndRect = [200, 200, 600, 600]; //< TODO
        const [ix, iy, iw, ih] = imageEndRect;

        ctx.fillStyle = getBackgroundColorOf(previouslyAvailableCharacterLogoMoves[bothCharacterIndex]);
        ctx.fillRect(x, y, w, h);

        ctx.drawImage(images[previouslyAvailableCharacterLogoMoves[bothCharacterIndex]], ix, iy, iw, ih);
      }

      // Draw opponent move
      {
        const selectedComputerMoveEndRect = [1000, 100, 600, 800];
        const [x, y, w, h] = selectedComputerMoveEndRect;

        const imageEndRect = [1000, 200, 600, 600]; //< TODO
        const [ix, iy, iw, ih] = imageEndRect;

        ctx.fillStyle = getBackgroundColorOf(logoOfCharacter(bothCharacter));
        ctx.fillRect(x, y, w, h);

        ctx.drawImage(images[logoOfCharacter(bothCharacter)], ix, iy, iw, ih);
      }

      break;
    }

    case 2: {
      // Own move exits left
      {
        const x = 200 - 800 * (phaseTime / phaseLength);

        ctx.fillStyle = getBackgroundColorOf(previouslyAvailableCharacterLogoMoves[bothCharacterIndex]);
        ctx.fillRect(x, 100, 600, 800);

        ctx.drawImage(images[previouslyAvailableCharacterLogoMoves[bothCharacterIndex]], x, 200, 600, 600);
      }

      // Opponent move exits right
      {
        const x = 1000 + 800 * (phaseTime / phaseLength);

        ctx.fillStyle = getBackgroundColorOf(logoOfCharacter(bothCharacter));
        ctx.fillRect(x, 100, 600, 800);

        ctx.drawImage(images[logoOfCharacter(bothCharacter)], x, 200, 600, 600);
      }

      break;
    }
  }
};

export default characterToCharacter;
