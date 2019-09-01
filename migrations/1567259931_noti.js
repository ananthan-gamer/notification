const Noti = artifacts.require("noti");

module.exports = function(deployer) {
  web3.eth.getAccounts().then((bcaddress) => { 
  deployer.deploy(Noti,bcaddress[0]);
  })
};
