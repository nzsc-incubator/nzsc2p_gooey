import { NZSCTwoPlayerGameWebInterface } from './wasm/nzsc2p_gooey';
import clownkit from './clownkit';
import generateRoomName from './generateRoomName';
import * as animations from './animations';
import nothingToCharacter from './transitions/nothingToCharacter';

const new2PGame = async () => {
  const store = {
    game: NZSCTwoPlayerGameWebInterface.new(),
    roomName: null,
    aOrB: null,
  };

  animations.loading.start();

  const roomNames = await clownkit.list();

  if (roomNames.length > 0) {
    const [roomName] = roomNames;

    store.roomName = roomName;
    store.aOrB = 'B';

    await clownkit.join(roomName);

    nothingToCharacter();
  } else {
    const roomName = generateRoomName();

    store.roomName = roomName;
    store.aOrB = 'A';

    await clownkit.create(roomName);
    await clownkit.waitForRoomToBeFull(roomName);

    nothingToCharacter();
  }
};

export default new2PGame;
