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
    amount = 1000000
    description = "test-debt"
    Bob = accounts[0]
    Alice = accounts[1]
  
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
      .deploy({ data: compiledFactory.bytecode })
      .send({ from: caller, gas: '1000000' })
    
    await factory.methods.createDebt(amount, accounts[1], description, "random txHash").send({
        from: caller,
        gas: '1000000'
    })
    
    deployedDebts = await factory.methods.getDeployedDebts().call();

    debt = await new web3.eth.Contract(JSON.parse(compiledDebt.interface),
    deployedDebts[0]);
});

describe("P2P Lending & Debt Management DApp", async ()=> {
    it("deploys contracts", () => {
        assert.ok(factory.options.address)
        assert.ok(debt.options.address)
    });
    it("allows users to lend each other money", async ()=> {
        aliceBalance = await web3.eth.getBalance(Alice)
        await web3.eth.sendTransaction({
            from: Bob,
            to: Alice,
            value: amount
        });
        aliceNewBalance = await web3.eth.getBalance(Alice)
        assert(aliceNewBalance=aliceBalance+amount)
    });
    it("creates a debt record between two parties", async()=> {
        tx = await web3.eth.sendTransaction({
            from: Bob,
            to: Alice,
            value: amount
        });
        _txHash = tx.transactionHash
        await factory.methods.createDebt(amount, Alice, description, _txHash).send({
        from: Bob,
        gas: '1000000'
        });
        debts = await factory.methods.getDeployedDebts().call();
        debt = await new web3.eth.Contract(JSON.parse(compiledDebt.interface),
        debts[1]);
        debtDetails = await debt.methods.getDetails().call();
        assert(debtDetails[5]==_txHash)
    });
    it("allows borrowers to settle debt", async()=> {
        tx = await web3.eth.sendTransaction({
            from: Bob,
            to: Alice,
            value: amount
        });
        _txHash = tx.transactionHash
        await factory.methods.createDebt(amount, Alice, description, _txHash).send({
        from: Bob,
        gas: '1000000'
        });
        debts = await factory.methods.getDeployedDebts().call();
        debt = await new web3.eth.Contract(JSON.parse(compiledDebt.interface),
        debts[1]);
        await debt.methods.settleDebt().send({
            from: Alice,
            gas: '1000000'
        });
    });
    it("end-to-end testing", async()=> {
        tx = await web3.eth.sendTransaction({
            from: Bob,
            to: Alice,
            value: amount
        });
        _txHash = tx.transactionHash
        await factory.methods.createDebt(amount, Alice, description, _txHash).send({
        from: Bob,
        gas: '1000000'
        });
        debts = await factory.methods.getDeployedDebts().call();
        debt = await new web3.eth.Contract(JSON.parse(compiledDebt.interface),
        debts[1]);
        debtDetails = await debt.methods.getDetails().call();
        await debt.methods.settleDebt().send({
            from: Alice,
            gas: '1000000'
        });
        assert(debtDetails[5]==_txHash)
        
    });

})
