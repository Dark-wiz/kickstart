import Web3 from 'web3';

let web3;

if (typeof window !== undefined && typeof window.web3 != undefined) {
    //we're in the browser and metamask is running
    web3 = new web3(window.web3.currentProvider);
} else {
    //we're on the server or user isn't running metamask
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/1d0ca15cd23f45d392029341b9c812b3');
    web3 = new Web3(provider);
}

export default web3;