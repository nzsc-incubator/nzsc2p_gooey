import * as animations from '../animations';

const nothingToCharacter = async () => {
  animations.loading.stop();
  await animations.nothingToCharacter.start();
};

export default nothingToCharacter;
