var AuctionContract = artifacts.require("./AuctionContract.sol");

module.exports = function(deployer) {
  deployer.deploy(AuctionContract);
};
