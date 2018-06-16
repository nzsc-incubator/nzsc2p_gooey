import { NZSCTwoPlayerGameWebInterface } from './wasm/nzsc2p_gooey';
import clownkit from './clownkit';
import generateRoomName from './generateRoomName';
import nothingToCharacter from './transitions/nothingToCharacter';
import createTurnEndListener from './createTurnEndListener';


const newGame = async (store) => {
  store.game = NZSCTwoPlayerGameWebInterface.new();

  const closedRoomNames = await clownkit.listClosed();

  closedRoomNames.forEach((roomName) => {
    clownkit.destroy(roomName, 'A').catch(() => {
      clownkit.destroy(roomName, 'B');
    });
  });

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
};

export default newGame;
