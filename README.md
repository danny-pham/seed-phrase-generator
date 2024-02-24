# Seed Phrase Generator

## Introduction
Seed Phrase Generator is a simple JavaScript library that helps you generate random seed phrases, which can be used to create Ethereum wallets. This library utilizes the [bip39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) library to generate seed phrases and [ethereumjs-wallet](https://github.com/ethereumjs/ethereumjs-wallet) to create Ethereum wallets from seed phrases.

## Installation
You can install the library via npm or yarn:

```
npm install seed-phrase-generator
```
or 
```
yarn add seed-phrase-generator
```

## Usage
Here's how to use the library to generate a seed phrase and create an Ethereum wallet from the seed phrase:

```
const seedPhraseGenerator = require('seed-phrase-generator');

// Generate a seed phrase
const seedPhrase = seedPhraseGenerator.generateSeedPhrase(); // Defaults to 12 words
console.log('Seed Phrase:', seedPhrase);

// Create an Ethereum wallet from the seed phrase
const ethereumWallet = seedPhraseGenerator.createEthereumWalletFromSeedPhrase(seedPhrase);
console.log('Ethereum Wallet:');
console.log('Address:', ethereumWallet.address);
console.log('Private Key:', ethereumWallet.privateKey);
```

## Options
You can specify the number of words and the length of the seed phrase when generating:

```
// Generate a seed phrase with 24 words
const seedPhrase24Words = seedPhraseGenerator.generateSeedPhrase(24);
console.log('24-word Seed Phrase:', seedPhrase24Words);
```

## License
This library is released under the MIT License.
