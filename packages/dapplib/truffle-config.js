require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy riot saddle honey inner kangaroo army gauge'; 
let testAccounts = [
"0x6b0ff04ecc697e9d46b9b8612785ebdc4165cf612a071bf68d564a29d24e626a",
"0x0002227c64dee0187e51d35e18ec2f70c37cf05d076694a17d107750cb27a58b",
"0x80a5ff8fcdeacccabf48f8a51b54371dbbdd818aa155c0f33b487efbd163176d",
"0xd3382884882ab7d73d478dd5927ebd9f3e8efe139fff590b6cf955493a0254d4",
"0x11c7baabc51306cd98dfb4e0360c6e883e039e1af8df73ac42d24188c4958b4e",
"0x20d8818c10be6dfb8b1b721a194c5021b62fcba61f95442fc4363461110dc41e",
"0x3b3923f82767cfeda2e2d54154a2c788700712ecfeb5ca9fa333b0003aaf9cb4",
"0x7aefd8c7653b6351cd31c6f452735533aa740a39a7f15aa5bf2d37e61e8ed5a5",
"0x1abdd92530cf2f82991519a3e35ce0a7c4cb5d4558e2391398c9da8e26fc6ba0",
"0x3c3ed09a3e4067b64a5a559527a7d3d6214d89485d8d79097dd63c10feed64b6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


