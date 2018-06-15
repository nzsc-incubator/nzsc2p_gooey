import { ctx } from '../canvas';
import { BACKGROUND, OVERLAY } from './private/colors';
import { logoOfBooster } from '../logos';
import images from '../images';
import getBackgroundColorOf from '../getBackgroundColorOf';
import { nthRect } from '../rect';
import { getPhase, getPhaseTime } from './private/phases';
import lerp from './private/lerp';

const ownBoosterSelection = ({
  previouslyAvailableBoosters,
  ownBooster,
  completionFactor,
}) => {
  const PHASE_LENGTHS = [1, Infinity];

  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, 1800, 1000);

  const previouslyAvailableBoosterLogoMoves = previouslyAvailableBoosters.map(logoOfBooster);

  const ownBoosterIndex = previouslyAvailableBoosters.findIndex(character => character === ownBooster);

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

  const phase = getPhase(completionFactor, PHASE_LENGTHS);
  const phaseLength = PHASE_LENGTHS[phase];
  const phaseTime = getPhaseTime(completionFactor, PHASE_LENGTHS);

  switch (phase) {
    case 0: {
      // Draw own booster
      const selectedHumanMoveStartRect = nthRect(ownBoosterIndex);
      const selectedHumanMoveEndRect = [200, 100, 600, 800];
      const selectedHumanMoveCurrentRect = selectedHumanMoveStartRect.map((n, i) => lerp(n, selectedHumanMoveEndRect[i], phaseTime / phaseLength));
      const [x, y, w, h] = selectedHumanMoveCurrentRect;

      const imageStartRect = [x, 300, 400, 400];
      const imageEndRect = [200, 200, 600, 600]; //< TODO
      const imageCurrentRect = imageStartRect.map((n, i) => lerp(n, imageEndRect[i], phaseTime / phaseLength));
      const [ix, iy, iw, ih] = imageCurrentRect;

      ctx.fillStyle = getBackgroundColorOf(previouslyAvailableBoosterLogoMoves[ownBoosterIndex]);
      ctx.fillRect(x, y, w, h);

      ctx.drawImage(images[previouslyAvailableBoosterLogoMoves[ownBoosterIndex]], ix, iy, iw, ih);

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

      break;
    }
  }
};

export default ownBoosterSelection;
