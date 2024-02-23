const bip39 = require('bip39');

const secureRandom = require('secure-random');

function generateSeedPhrase() {
  const randomBytes = secureRandom.randomBuffer(16); // Generate 16 random bytes
  return bip39.entropyToMnemonic(randomBytes.toString('hex'));
}

// Export hàm generateSeedPhrase để có thể sử dụng từ bên ngoài.
module.exports = generateSeedPhrase;
