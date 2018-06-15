import { NZSCTwoPlayerGameWebInterface } from './wasm/nzsc2p_gooey';
import * as animations from './animations';

const new2PGame = () => {
  const store = {
    game: NZSCTwoPlayerGameWebInterface.new(),
    aOrB: null,
  };

  animations.loading.start();
};

export default new2PGame;
