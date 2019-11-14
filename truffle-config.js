var HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require('fs');
let secrets;
if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
}

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    mainnet: {
      provider: function () {
        return new HDWalletProvider(secrets.mnemonic, "https://mainnet.infura.io/v3/" + secrets.infuraApiKey);
      },
      network_id: "1",
    },
  },

  compilers: {
    solc: {
      version: "0.5.0",
      docker: false,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
}