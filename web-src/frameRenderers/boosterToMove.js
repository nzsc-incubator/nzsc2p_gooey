import { ctx } from '../canvas';
import { BACKGROUND, OVERLAY, SCORE_COLOR } from './private/colors';
import { logoOfBooster, noSpace } from '../logos';
import images from '../images';
import getBackgroundColorOf from '../getBackgroundColorOf';
import { nthRect } from '../rect';
import { nthCircle } from '../circle';
import { getPhase, getPhaseTime } from './private/phases';
import lerp from './private/lerp';

const boosterToMove = ({
  previouslyAvailableBoosters,
  availableMoves: availableMovesWithSpaces,
  ownBooster,
  opponentBooster,
  ownPoints,
  opponentPoints,
  completionFactor,
}) => {
  const PHASE_LENGTHS = [0.176, 0.648, 0.176];

  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, 1800, 1000);

  const previouslyAvailableBoosterLogoMoves = previouslyAvailableBoosters.map(logoOfBooster);
  const availableMoves = availableMovesWithSpaces.map(noSpace);

  const ownBoosterIndex = previouslyAvailableBoosters.findIndex(booster => booster === ownBooster);

  if (completionFactor !== 1) {
    for (let i = 0; i < previouslyAvailableBoosterLogoMoves.length; i++) {
      // Don't draw selected human character.
      if (i === ownBoosterIndex) {
        continue;
      }

      ctx.fillStyle = getBackgroundColorOf(previouslyAvailableBoosterLogoMoves[i]);

      const rect = nthRect(i);
      const [x, y, w, h] = rect;

      ctx.fillRect(x, y, w, h);

      ctx.drawImage(images[previouslyAvailableBoosterLogoMoves[i]], x, 300, 400, 400);
    }

    ctx.fillStyle = OVERLAY;
    ctx.fillRect(0, 0, 1800, 1000);
  } else {
    for (let i = 0; i < availableMoves.length; i++) {
      const [x, y, r] = nthCircle(i);
      const d = 2 * r;

      ctx.fillStyle = getBackgroundColorOf(availableMoves[i]);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      ctx.drawImage(images[availableMoves[i]], x - r, y - r, d, d);
    }

    ctx.fillStyle = SCORE_COLOR;
    if (ownPoints === 1) {
      ctx.fillRect(100, 850, 20, 100);
    }
    if (opponentPoints === 1) {
      ctx.fillRect(1700, 850, 20, 100);
    }
  }

  const phase = getPhase(completionFactor, PHASE_LENGTHS);
  const phaseLength = PHASE_LENGTHS[phase];
  const phaseTime = getPhaseTime(completionFactor, PHASE_LENGTHS);

  switch (phase) {
    case 0: {
      // Draw own booster
      {
        const selectedHumanMoveEndRect = [200, 100, 600, 800];
        const [x, y, w, h] = selectedHumanMoveEndRect;

        const imageEndRect = [200, 200, 600, 600]; //< TODO
        const [ix, iy, iw, ih] = imageEndRect;

        ctx.fillStyle = getBackgroundColorOf(previouslyAvailableBoosterLogoMoves[ownBoosterIndex]);
        ctx.fillRect(x, y, w, h);

        ctx.drawImage(images[previouslyAvailableBoosterLogoMoves[ownBoosterIndex]], ix, iy, iw, ih);
      }

      // Draw opponent booster
      const selectedComputerMoveStartRect = [1800, 100, 600, 800];
      const selectedComputerMoveEndRect = [1000, 100, 600, 800];
      const selectedComputerMoveCurrentRect = selectedComputerMoveStartRect.map((n, i) => lerp(n, selectedComputerMoveEndRect[i], phaseTime / phaseLength));
      const [x, y, w, h] = selectedComputerMoveCurrentRect;

      const imageStartRect = [1800, 200, 600, 600]; //< TODO
      const imageEndRect = [1000, 200, 600, 600]; //< TODO
      const imageCurrentRect = imageStartRect.map((n, i) => lerp(n, imageEndRect[i], phaseTime / phaseLength));
      const [ix, iy, iw, ih] = imageCurrentRect;

      ctx.fillStyle = getBackgroundColorOf(logoOfBooster(opponentBooster));
      ctx.fillRect(x, y, w, h);

      ctx.drawImage(images[logoOfBooster(opponentBooster)], ix, iy, iw, ih);

      break;
    }

    case 1: {
      // Draw own booster
      {
        const selectedHumanMoveEndRect = [200, 100, 600, 800];
        const [x, y, w, h] = selectedHumanMoveEndRect;

        const imageEndRect = [200, 200, 600, 600]; //< TODO
        const [ix, iy, iw, ih] = imageEndRect;

        ctx.fillStyle = getBackgroundColorOf(previouslyAvailableBoosterLogoMoves[ownBoosterIndex]);
        ctx.fillRect(x, y, w, h);

        ctx.drawImage(images[previouslyAvailableBoosterLogoMoves[ownBoosterIndex]], ix, iy, iw, ih);
      }

      // Draw opponent booster
      {
        const selectedComputerMoveEndRect = [1000, 100, 600, 800];
        const [x, y, w, h] = selectedComputerMoveEndRect;

        const imageEndRect = [1000, 200, 600, 600]; //< TODO
        const [ix, iy, iw, ih] = imageEndRect;

        ctx.fillStyle = getBackgroundColorOf(logoOfBooster(opponentBooster));
        ctx.fillRect(x, y, w, h);

        ctx.drawImage(images[logoOfBooster(opponentBooster)], ix, iy, iw, ih);
      }

      break;
    }

    case 2: {
      // Own booster exits left
      {
        const x = 200 - 800 * (phaseTime / phaseLength);

        ctx.fillStyle = getBackgroundColorOf(previouslyAvailableBoosterLogoMoves[ownBoosterIndex]);
        ctx.fillRect(x, 100, 600, 800);

        ctx.drawImage(images[previouslyAvailableBoosterLogoMoves[ownBoosterIndex]], x, 200, 600, 600);
      }

      // Opponent booster exits right
      {
        const x = 1000 + 800 * (phaseTime / phaseLength);

        ctx.fillStyle = getBackgroundColorOf(logoOfBooster(opponentBooster));
        ctx.fillRect(x, 100, 600, 800);

        ctx.drawImage(images[logoOfBooster(opponentBooster)], x, 200, 600, 600);
      }

      break;
    }
  }
};

export default boosterToMove;
