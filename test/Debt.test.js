const assert = require('assert')
const ganache = require('ganache-cli')
const provider = ganache.provider()
const Web3 = require('web3')
const web3 = new Web3(provider)

const compiledFactory = require('../ethereum/build/DebtFactory.json')
const compiledDebt = require('../ethereum/build/Debt.json')

let accounts;
let debtAddress;
let debt;
let factory;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts()
    ;[caller] = accounts
  
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
      .deploy({ data: compiledFactory.bytecode })
      .send({ from: caller, gas: '1000000' })

    await factory.methods.createDebt(100000, accounts[1],"test-debt").send({
        from: caller,
        gas: '1000000'
    })

    ;[debtAddress] = await factory.methods.getDeployedDebts().call();

    debt = await new web3.eth.Contract(JSON.parse(compiledDebt.interface),
    debtAddress);
});

describe("Debt Collector DeFi", ()=> {
    it("deploys contracts", () => {
        assert.ok(factory.options.address)
        assert.ok(debt.options.address)
    });
})
