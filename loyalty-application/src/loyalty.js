const fs = require('fs/promises')
const path = require('path')

const { Gateway, Wallets } = require('fabric-network')
const { buildCCPOrg1, buildWallet } = require('./enroll/utils/AppUtil.js')


// The getconfig package loads configuration from files located in the the `config` directory.
// See https://www.npmjs.com/package/getconfig for info on how to override the default config for
// different environments (e.g. testnet, mainnet, staging, production, etc).
const config = require('getconfig')

async function CreateLoyalty() {
    const m = new Loyalty()
    await m.init()
    return m
}

module.exports = {
    CreateLoyalty
}

class Loyalty {
    constructor() {
        this.ipfs = null
        this.ccp = null
        this.wallet = null
        this._initialized = false
        this.gateway = null
        this.contract = null
    }

    async init() {
        if (this._initialized) {
            return
        }

        /*x---------Smart Contract

            this.hardhat = require('hardhat')

            // The Minty object expects that the contract has already been deployed, with
            // details written to a deployment info file. The default location is `./minty-deployment.json`,
            // in the config.
            this.deployInfo = await loadDeploymentInfo()

            // connect to the smart contract using the address and ABI from the deploy info
            const {abi, address} = this.deployInfo.contract
            this.contract = await this.hardhat.ethers.getContractAt(abi, address)

        y---------Smart Contract*/

        // connection
        const {ccp, wallet} = await this.createConnection()
        this.ccp = ccp
        this.wallet = wallet
        this._initialized = true

        const gateway = new Gateway();
        await gateway.connect(this.ccp, {
            wallet: this.wallet,
            identity: config.org1UserId,
            discovery: { enabled: true, asLocalhost: true } // using asLocalhost as this gateway is using a fabric network deployed locally
        });
        this.gateway = gateway

        // Build a network instance based on the channel where the smart contract is deployed
        this.network = await gateway.getNetwork(config.channelName)

        // Get the contract from the network.
        this.contract = this.network.getContract(config.chaincodeName)

    }

    disconnect(){
        this.gateway.disconnect()
    }

    async createConnection() {
        // This sample assumes Org1 is the issuer with privilege to mint a new token
        const ccp = buildCCPOrg1();

        // setup the wallet to hold the credentials of the application user
        const walletPath = path.join(__dirname, '..', 'wallet/org1');
        console.log(`*** walletPath: ${walletPath}`);
        const wallet = await buildWallet(Wallets, walletPath);

        return {ccp, wallet}
    }

    async createUser(username){
        console.log('\n--> Submit Transaction: CreateMember');
        const user = {accountNumber: `${Date.now()}`,username}
        const resultBuf = await this.contract.submitTransaction('CreateMember', JSON.stringify(user));
        console.log('*** Result: committed');
        if (`${resultBuf}` !== '') {
            console.log(`*** Result: ${prettyJSONString(resultBuf.toString())}`);
        }
        return user
    }

    async earnPoint(options){
        console.log('\n--> Submit Transaction: EarnPoints',options);
        const resultBuf = await this.contract.submitTransaction('EarnPoints', JSON.stringify(options));
        console.log('*** Result: committed');
        if (`${resultBuf}` !== '') {
            console.log(`*** Result: ${prettyJSONString(resultBuf.toString())}`);
        }
        return resultBuf.toString()
    }

    async getPoint(member){
        console.log('\n--> Evaluate Transaction: EarnPoints',member);
        let userPoint = await this.contract.evaluateTransaction('GetState', member);
        userPoint = JSON.parse(userPoint)

        let userLog = await this.contract.evaluateTransaction('EarnPointsTransactionsInfo', 'member',member);
        userLog = JSON.parse(userLog.toString())

        return {userPoint,userLog}
    }


}

function prettyJSONString(inputString) {
    return JSON.stringify(JSON.parse(inputString), null, 2);
}