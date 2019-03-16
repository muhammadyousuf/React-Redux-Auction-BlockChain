import Web3 from 'web3';

let web3;

if(typeof window !=='undefined' && typeof window.web3 !== "undefined"){
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/e7cc830da9f546b29a0f80a94a2e8cc6'
    );
    web3 = new Web3(provider);
}

export default web3;