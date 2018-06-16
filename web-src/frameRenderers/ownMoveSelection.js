import { ctx } from '../canvas';
import { BACKGROUND, OVERLAY, SCORE_COLOR } from './private/colors';
import { noSpace } from '../logos';
import images from '../images';
import getBackgroundColorOf from '../getBackgroundColorOf';
import { nthCircle } from '../circle';
import { getPhase, getPhaseTime } from './private/phases';
import lerp from './private/lerp';

const ownMoveSelection = ({
  previouslyAvailableMoves: previouslyAvailableMovesWithSpaces,
  ownMove,
  ownPoints,
  opponentPoints,
  completionFactor,
}) => {
  const PHASE_LENGTHS = [1, Infinity];

  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, 1800, 1000);

  const previouslyAvailableMoves = previouslyAvailableMovesWithSpaces.map(noSpace);

  const selectedOwnMoveIndex = previouslyAvailableMoves.findIndex(move => move === noSpace(ownMove));

  for (let i = 0; i < previouslyAvailableMoves.length; i++) {
    // Don't draw own selected move.
    if (i === selectedOwnMoveIndex) {
      continue;
    }

    ctx.fillStyle = getBackgroundColorOf(previouslyAvailableMoves[i]);

    const circle = nthCircle(i);
    const x = circle[0];
    const [, y, r] = circle;
    const d = 2 * r;

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.drawImage(images[previouslyAvailableMoves[i]], x - r, y - r, d, d);
  }

  ctx.fillStyle = OVERLAY;
  ctx.fillRect(0, 0, 1800, 1000);

  ctx.fillStyle = SCORE_COLOR;

  for (let i = 0; i < ownPoints; i++) {
    ctx.fillRect(100 + i * 30, 850, 20, 100);
  }

  for (let i = 0; i < opponentPoints; i++) {
    ctx.fillRect(1700 - i * 30, 850, 20, 100);
  }

  const phase = getPhase(completionFactor, PHASE_LENGTHS);
  const phaseLength = PHASE_LENGTHS[phase];
  const phaseTime = getPhaseTime(completionFactor, PHASE_LENGTHS);

  switch (phase) {
    case 0: {
      // Draw own move
      const selectedOwnMoveStartCircle = nthCircle(selectedOwnMoveIndex);
      const selectedOwnMoveEndCircle = [490, 500, 360];
      const selectedOwnMoveCurrentCircle = selectedOwnMoveStartCircle.map((n, i) => lerp(n, selectedOwnMoveEndCircle[i], phaseTime / phaseLength));

      const x = selectedOwnMoveCurrentCircle[0];
      const [, y, r] = selectedOwnMoveCurrentCircle;
      const d = 2 * r;

      ctx.fillStyle = getBackgroundColorOf(ownMove);

      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      ctx.drawImage(images[noSpace(ownMove)], x - r, y - r, d, d);

      break;
    }

    case 1: {
      // Draw own move
      const selectedOwnMoveEndCircle = [490, 500, 360];

      const x = selectedOwnMoveEndCircle[0];
      const [, y, r] = selectedOwnMoveEndCircle;
      const d = 2 * r;

      ctx.fillStyle = getBackgroundColorOf(ownMove);

      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      ctx.drawImage(images[noSpace(ownMove)], x - r, y - r, d, d);

      break;
    }
  }
};

export default ownMoveSelection;
