const bip39 = require('bip39');
const secureRandom = require('secure-random');

function generateSeedPhrase(length = 12) {
  if (length !== 12 && length !== 24) {
    throw new Error('Seed phrase length must be either 12 or 24 words.');
  }
  
  const entropyLength = length === 24 ? 32 : 16; // 256 bits for 24 words, 128 bits for 12 words
  const randomBytes = secureRandom.randomBuffer(entropyLength); // Generate random bytes
  return bip39.entropyToMnemonic(randomBytes.toString('hex'));
}

module.exports = generateSeedPhrase;
