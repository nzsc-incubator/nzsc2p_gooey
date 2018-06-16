import { ctx } from '../canvas';
import { BACKGROUND, OVERLAY, SCORE_COLOR } from './private/colors';
import { noSpace } from '../logos';
import images from '../images';
import getBackgroundColorOf from '../getBackgroundColorOf';
import { nthCircle } from '../circle';
import { getPhase, getPhaseTime } from './private/phases';
import lerp from './private/lerp';

const moveClash = ({
  previouslyAvailableMoves: previouslyAvailableMovesWithSpaces,
  availableMoves: availableMovesWithSpaces,
  ownMove,
  opponentMove,
  whoGetsThePoint,
  ownPoints,
  opponentPoints,
  completionFactor,
}) => {
  const PHASE_LENGTHS = [0.176, 0.648, 0.176];

  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, 1800, 1000);

  const previouslyAvailableMoves = previouslyAvailableMovesWithSpaces.map(noSpace);
  const availableMoves = availableMovesWithSpaces.map(noSpace);

  const selectedOwnMoveIndex = previouslyAvailableMoves.findIndex(move => move === noSpace(ownMove));

  if (completionFactor !== 1) {
    for (let i = 0; i < previouslyAvailableMoves.length; i++) {
      // Don't draw selected human move.
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
  } else {
    for (let i = 0; i < availableMoves.length; i++) {
      ctx.fillStyle = getBackgroundColorOf(availableMoves[i]);

      const circle = nthCircle(i);
      const x = circle[0];
      const [, y, r] = circle;
      const d = 2 * r;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      ctx.drawImage(images[availableMoves[i]], x - r, y - r, d, d);
    }

    ctx.fillStyle = SCORE_COLOR;

    for (let i = 0; i < ownPoints; i++) {
      ctx.fillRect(100 + i * 30, 850, 20, 100);
    }

    for (let i = 0; i < opponentPoints; i++) {
      ctx.fillRect(1700 - i * 30, 850, 20, 100);
    }
  }

  const phase = getPhase(completionFactor, PHASE_LENGTHS);
  const phaseLength = PHASE_LENGTHS[phase];
  const phaseTime = getPhaseTime(completionFactor, PHASE_LENGTHS);

  switch (phase) {
    case 0: {
      // Draw human move
      {
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
      }

      // Draw computer move
      const selectedOpponentMoveStartCircle = [1800, 500, 360];
      const selectedOpponentMoveEndCircle = [1310, 500, 360];

      const selectedOpponentMoveCurrentCircle = selectedOpponentMoveStartCircle.map((n, i) => lerp(n, selectedOpponentMoveEndCircle[i], phaseTime / phaseLength));
      const x = selectedOpponentMoveCurrentCircle[0];
      const [, y, r] = selectedOpponentMoveCurrentCircle;
      const d = 2 * r;

      ctx.fillStyle = getBackgroundColorOf(opponentMove);

      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      ctx.drawImage(images[noSpace(opponentMove)], x - r, y - r, d, d);

      break;
    }

    case 1: {
      // Draw human move
      const FADE_RATE = 5;

      {
        if (whoGetsThePoint === 'OPPONENT' || whoGetsThePoint === 'BOTH') {
          ctx.globalAlpha = lerp(1, 0, Math.min(phaseTime * FADE_RATE, 1));
        }

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

        ctx.globalAlpha = 1;
      }

      // Draw computer move
      {
        if (whoGetsThePoint === 'SELF' || whoGetsThePoint === 'BOTH') {
          ctx.globalAlpha = lerp(1, 0, Math.min(phaseTime * FADE_RATE, 1));
        }

        const selectedOpponentMoveEndCircle = [1310, 500, 360];

        const x = selectedOpponentMoveEndCircle[0];
        const [, y, r] = selectedOpponentMoveEndCircle;
        const d = 2 * r;

        ctx.fillStyle = getBackgroundColorOf(opponentMove);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.drawImage(images[noSpace(opponentMove)], x - r, y - r, d, d);

        ctx.globalAlpha = 1;
      }

      break;
    }

    case 2: {
      if (!(whoGetsThePoint === 'OPPONENT' || whoGetsThePoint === 'BOTH')) {
        const selectedOwnMoveEndCircle = [490, 500, 360];

        const x = selectedOwnMoveEndCircle[0] - 850 * (phaseTime / phaseLength);
        const [, y, r] = selectedOwnMoveEndCircle;
        const d = 2 * r;

        ctx.fillStyle = getBackgroundColorOf(ownMove);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.drawImage(images[noSpace(ownMove)], x - r, y - r, d, d);
      }

      // Draw computer move
      if (!(whoGetsThePoint === 'SELF' || whoGetsThePoint === 'BOTH')) {
        const selectedOpponentMoveEndCircle = [1310, 500, 360];

        const x = selectedOpponentMoveEndCircle[0] + 850 * (phaseTime / phaseLength);
        const [, y, r] = selectedOpponentMoveEndCircle;
        const d = 2 * r;

        ctx.fillStyle = getBackgroundColorOf(opponentMove);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.drawImage(images[noSpace(opponentMove)], x - r, y - r, d, d);
      }

      break;
    }
  }
};

export default moveClash;
