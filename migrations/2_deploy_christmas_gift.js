const { scripts, ConfigManager } = require('@openzeppelin/cli');
const { add, push, create } = scripts;

async function deploy(options) {
    add({ contractsData: [{ name: 'LocalCoinSwapChristmasGift', alias: 'LocalCoinSwapChristmasGift' }] });
    await push(options);
    await create(Object.assign({ contractAlias: 'LocalCoinSwapChristmasGift' }, options));
}

module.exports = function (deployer, networkName, accounts) {
    deployer.then(async () => {
        console.log('Network', networkName, 'Accounts', accounts);
        const { network, txParams } = await ConfigManager.initNetworkConfiguration({ network: networkName, from: accounts[0] })
        await deploy({ network, txParams })
    })
}