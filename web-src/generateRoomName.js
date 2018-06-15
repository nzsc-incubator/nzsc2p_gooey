// 16**3 = 4096 possibilities
const generateRoomName = () => {
  const adjectives = `
flexible
nerdy
demonic
prolix
prodigious
hilarious
jovial
pious
heroic
hypocritical
irrational
majestic
articulate
satirical
vengeful
drunk
  `.trim().split('\n');

  const moreAdjectives = `
limping
yodeling
exploding
babbling
sprinting
dying
drinking
freezing
flying
dancing
screaming
sleeping
burning
flexing
gasping
drowning
  `.trim().split('\n');

  const nouns = `
minotaur
pegasus
scorpion
centaur
elf
dragon
goblin
phoenix
hydra
dwarf
mermaid
cobra
hornet
wolf
ghost
goat
  `.trim().split('\n');

  const i = Math.floor(Math.random() * 16);
  const j = Math.floor(Math.random() * 16);
  const k = Math.floor(Math.random() * 16);

  return adjectives[i] + '_' + moreAdjectives[j] + '_' + nouns[k];
};

export default generateRoomName;
