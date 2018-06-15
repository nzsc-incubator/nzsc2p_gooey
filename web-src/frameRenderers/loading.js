import { ctx } from '../canvas';
import images from '../images';

const TAU = 2 * Math.PI;
const ARC_SIZE = 0.25 * TAU;

const loading = ({
  completionFactor,
}) => {
  const theta = completionFactor * TAU;

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

  ctx.strokeStyle = '#ffa500';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(900, 500, 100, theta, theta + ARC_SIZE);
  ctx.stroke();
};

export default loading;
