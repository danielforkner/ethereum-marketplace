require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: '172.29.192.1',
      port: 7545,
      network_id: '*',
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
