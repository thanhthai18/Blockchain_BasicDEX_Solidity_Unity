const TestUniswap = artifacts.require("TestUniswap");

module.exports = function (deployer) {
  deployer.deploy(TestUniswap);
};
