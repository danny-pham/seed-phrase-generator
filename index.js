const generateSeedPhrase = require('./seed-phrase-generator');

const seedPhrase = generateSeedPhrase();
console.log("Generated Seed Phrase:", seedPhrase);

