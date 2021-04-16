import Web3 from 'web3';
const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
    mnemonic: 'game saddle oyster laundry equal loop lunch allow cactus endless hover unfair',
    // 'game saddle oyster laundry equal loop lunch allow cactus endless hover unfair',
    providerOrUrl: 'https://rinkeby.infura.io/v3/1d0ca15cd23f45d392029341b9c812b3'

});
const web3 = new Web3(provider);
const loadWeb3 = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable()
    }
    else if (window.web3) {
        window.web3 = new Web3(provider)
    }
    else {
        window.alert('non Ethereum browser detected. Download Metamask')
    }
};
web3.eth.requestAccounts().then(console.log);

export default web3;

loadWeb3();

