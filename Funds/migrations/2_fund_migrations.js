const theLotteryContract = artifacts.require("theLottery");
const theGroupFund = artifacts.require("GroupFund");

module.exports = function (deployer) {
  deployer.deploy(theLotteryContract);
};

module.exports = function (deployer) {
  deployer.deploy(theGroupFund);
};

