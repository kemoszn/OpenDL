import web3 from './web3'
import DebtFactory from './build/DebtFactory.json'

const instance = new web3.eth.Contract(
  JSON.parse(DebtFactory.interface),
  "0xeb0Fcf7805d6418198bA124B655E3458b753cAc7"
);

export default instance;