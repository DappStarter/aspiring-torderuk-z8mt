require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remind mistake include case frame twenty'; 
let testAccounts = [
"0x8d4e8a042ece10c4a9779195c47a7a6733372232361e99ecad985d1cc50b1c0c",
"0xa6087fde82dcbb6a2b0bfdbfb35a35e328910a365ab9346332c8ff2a426cbd53",
"0x6fd9f8b93519735118f2676eda9361beb346764ad0188d3d03dc7421f868ccba",
"0xa63b8b8a0f5ff6f04e0d791745855e857609f62a072b262c1267dc31f970bcfe",
"0x3cb301abfbf0510e342d078f9365eeb7e3b774343cb48e7908e601a8cd3d9858",
"0xe85b8076b7e66d6d37a9807ea362bcf10ce5aba73b04bba91cc05ea39f94ae0a",
"0x53d5d0c48dbca7c82a59a7b11ba32ef0fc86b4d012373c98eac80b0fa76fe025",
"0xc01fbe71556295339e9632b2ab6ab20ad755b60d0e09affbb98526f37db5d3d7",
"0xb010e59febbca9a15a88a0403dbfe30f38b05795c2364264903106a5421e74f2",
"0x195d6fb74347a21313bc97fc6798e086ee0dcab520542829dbdb8fd39a1a2d17"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

