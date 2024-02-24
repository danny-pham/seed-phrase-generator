const assert = require('assert');
const generateSeedPhrase = require('./seed-phrase-generator');

describe('Seed Phrase Generator', () => {
  it('should generate 12-word seed phrase by default', () => {
    const seedPhrase = generateSeedPhrase();
    const words = seedPhrase.split(' ');
    assert.strictEqual(words.length, 12);
  });

  it('should generate 24-word seed phrase if specified', () => {
    const seedPhrase = generateSeedPhrase(24);
    const words = seedPhrase.split(' ');
    assert.strictEqual(words.length, 24);
  });

  it('should throw error for invalid phrase length', () => {
    assert.throws(() => generateSeedPhrase(10), /Seed phrase length must be either 12 or 24 words/);
  });
});

