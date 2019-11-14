const LocalCoinSwapChristmasGift = artifacts.require("LocalCoinSwapChristmasGift");

module.exports = async function (deployer, networkName, accounts) {
    const christmasGift = await LocalCoinSwapChristmasGift.deployed();
    console.log('\nCurrent network', networkName);
    if (networkName != 'test') {
        await christmasGift.initialize(accounts[0]);
    }
};