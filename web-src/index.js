import { NZSCTwoPlayerGameWebInterface } from './wasm/nzsc2p_gooey';
import clownkit from './clownkit';
import generateRoomName from './generateRoomName';
import { canvas, correctCanvasDimensions } from './canvas';
import * as animations from './animations';
import nothingToCharacter from './transitions/nothingToCharacter';
import createClickListener from './clickListeners/createClickListener';
import createTurnEndListener from './createTurnEndListener';

window.addEventListener('resize', () => {
  correctCanvasDimensions();
  /*if (store.repaint) {
    store.repaint();
  }*/
});



(async () => {
  animations.loading.start();

  await clownkit.login();

  const closedRoomNames = await clownkit.listClosed();

  closedRoomNames.forEach((roomName) => {
    clownkit.destroy(roomName, 'A').catch(() => {
      clownkit.destroy(roomName, 'B');
    });
  });

  const store = {
    game: NZSCTwoPlayerGameWebInterface.new(),
    roomName: null,
    aOrB: null,
  };

  canvas.addEventListener('click', createClickListener(store));

  const roomNames = await clownkit.list();

  if (roomNames.length > 0) {
    const [roomName] = roomNames;

    store.roomName = roomName;
    store.aOrB = 'B';

    await clownkit.join(roomName);

    nothingToCharacter();

    clownkit.onTurnEnd(roomName, createTurnEndListener(store));
  } else {
    const roomName = generateRoomName();

    store.roomName = roomName;
    store.aOrB = 'A';

    await clownkit.create(roomName);
    await clownkit.waitForRoomToBeFull(roomName);

    nothingToCharacter();

    clownkit.onTurnEnd(roomName, createTurnEndListener(store));
  }
})();
