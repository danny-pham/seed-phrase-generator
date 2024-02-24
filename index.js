const readline = require('readline');
const { generateSeedPhrase, createEthereumWalletFromSeedPhrase } = require('./seed-phrase-generator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number of seed phrases you want to generate: ', (numberOfPhrasesInput) => {
  const numberOfPhrases = parseInt(numberOfPhrasesInput, 10);

  rl.question('Enter the length of each seed phrase (12 or 24 words): ', (phraseLengthInput) => {
    const phraseLength = parseInt(phraseLengthInput, 10);

    const seedPhrases = [];
    for (let i = 0; i < numberOfPhrases; i++) {
      seedPhrases.push(generateSeedPhrase(phraseLength));
    }

    seedPhrases.forEach((seedPhrase, index) => {
      console.log(`Seed Phrase ${index + 1}: ${seedPhrase}`);
      const ethereumWallet = createEthereumWalletFromSeedPhrase(seedPhrase);
      console.log(`Ethereum Wallet ${index + 1}:`);
      console.log(`Address: ${ethereumWallet.address}`);
      console.log(`Private Key: ${ethereumWallet.privateKey}\n`);
    });

    rl.close();
  });
});
