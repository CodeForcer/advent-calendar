var HDWalletProvider = require("truffle-hdwallet-provider");
const test_mnemonic = "myth like bonus scare over problem client lizard pioneer submit female collect"

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    test: {
      provider: function () {
        return new HDWalletProvider(test_mnemonic, "http://127.0.0.1:8545/");
      },
      network_id: '*',
    }
  },
};
