import { ctx } from '../canvas';
import images from '../images';

const TAU = 2 * Math.PI;
const WIFI_Y = 600;
const WIFI_SCALE = 1.5;

const waitingForNetwork = ({
  completionFactor,
}) => {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, 900, 500);
  ctx.fillRect(900, 500, 900, 500);
  ctx.fillStyle = '#222';
  ctx.fillRect(900, 0, 900, 500);
  ctx.fillRect(0, 500, 900, 500);

  ctx.drawImage(images.Kick, 200, 0, 500, 500);
  ctx.drawImage(images.Rampage, 1100, 0, 500, 500);
  ctx.drawImage(images.Helmet, 200, 500, 500, 500);
  ctx.drawImage(images.Nose, 1100, 500, 500, 500);

  ctx.fillStyle = '#ffa500';
  ctx.strokeStyle = '#ffa500';
  ctx.lineWidth = 10;

  ctx.beginPath();
  ctx.arc(900, WIFI_Y, 25 * WIFI_SCALE, 0.625 * TAU, 0.875 * TAU);
  ctx.lineTo(900, WIFI_Y);
  ctx.fill();
  ctx.closePath();

  if (completionFactor > 0.25) {
    ctx.beginPath();
    ctx.arc(900, WIFI_Y, 50 * WIFI_SCALE, 0.625 * TAU, 0.875 * TAU);
    ctx.stroke();
    ctx.closePath();
  }

  if (completionFactor > 0.5) {
    ctx.beginPath();
    ctx.arc(900, WIFI_Y, 100 * WIFI_SCALE, 0.625 * TAU, 0.875 * TAU);
    ctx.stroke();
    ctx.closePath();
  }

  if (completionFactor > 0.75) {
    ctx.beginPath();
    ctx.arc(900, WIFI_Y, 150 * WIFI_SCALE, 0.625 * TAU, 0.875 * TAU);
    ctx.stroke();
    ctx.closePath();
  }
};

export default waitingForNetwork;
