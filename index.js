const readline = require('readline');
const generateSeedPhrase = require('./seed-phrase-generator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function createSeedPhrases(numberOfPhrases, phraseLength) {
  if (isNaN(numberOfPhrases) || numberOfPhrases <= 0) {
    console.error('Invalid number of phrases. Please provide a positive integer.');
    rl.close();
    return;
  }

  if (phraseLength !== 12 && phraseLength !== 24) {
    console.error('Invalid phrase length. Please provide 12 or 24.');
    rl.close();
    return;
  }

  for (let i = 0; i < numberOfPhrases; i++) {
    const seedPhrase = generateSeedPhrase(phraseLength);
    console.log(`Generated Seed Phrase ${i + 1} (${phraseLength} words):`, seedPhrase);
  }

  rl.close();
}

rl.question('Enter the number of seed phrases you want to generate: ', (numberOfPhrasesInput) => {
  const numberOfPhrases = parseInt(numberOfPhrasesInput, 10);

  rl.question('Enter the length of each seed phrase (12 or 24 words): ', (phraseLengthInput) => {
    const phraseLength = parseInt(phraseLengthInput, 10);

    createSeedPhrases(numberOfPhrases, phraseLength);
  });
});
