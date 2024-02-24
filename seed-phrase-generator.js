const bip39 = require('bip39');
const Wallet = require('ethereumjs-wallet').default;

function generateSeedPhrase(length = 12) {
    if (length !== 12 && length !== 24) {
        throw new Error('Seed phrase length must be either 12 or 24 words.');
    }
  
    const entropyLength = length === 24 ? 32 : 16; // 256 bits for 24 words, 128 bits for 12 words
    const randomBytes = require('crypto').randomBytes(entropyLength); // Generate random bytes
    return bip39.entropyToMnemonic(randomBytes.toString('hex'));
}

function createEthereumWalletFromSeedPhrase(seedPhrase) {
  const seed = bip39.mnemonicToSeedSync(seedPhrase.trim());

  const privateKeyBuffer = seed.slice(0, 32);
  const wallet = Wallet.fromPrivateKey(privateKeyBuffer);

  const address = wallet.getAddressString();

  return {
      address: address,
      privateKey: wallet.getPrivateKeyString()
  };
}

module.exports = {
  generateSeedPhrase: generateSeedPhrase,
  createEthereumWalletFromSeedPhrase: createEthereumWalletFromSeedPhrase
};
