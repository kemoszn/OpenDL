const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const DebtFactory = require("./build/DebtFactory.json");

const mnu =
  "record rice genuine entire pact palace thunder typical wrestle trust assist glimpse";
const network = "https://rinkeby.infura.io/v3/315df566c9244aa2b9608a31ba46bc8a";

const provider = new HDWalletProvider(mnu, network);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(DebtFactory.interface)
  )
    .deploy({ data: DebtFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to", result.options.address);
};
deploy();